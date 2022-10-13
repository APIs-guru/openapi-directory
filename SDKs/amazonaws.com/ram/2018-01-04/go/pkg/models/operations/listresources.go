package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourcesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListResourcesRequestBodyResourceOwnerEnum string

const (
	ListResourcesRequestBodyResourceOwnerEnumSelf          ListResourcesRequestBodyResourceOwnerEnum = "SELF"
	ListResourcesRequestBodyResourceOwnerEnumOtherAccounts ListResourcesRequestBodyResourceOwnerEnum = "OTHER-ACCOUNTS"
)

type ListResourcesRequestBody struct {
	MaxResults        *int64                                    `json:"maxResults"`
	NextToken         *string                                   `json:"nextToken"`
	Principal         *string                                   `json:"principal"`
	ResourceArns      []string                                  `json:"resourceArns"`
	ResourceOwner     ListResourcesRequestBodyResourceOwnerEnum `json:"resourceOwner"`
	ResourceShareArns []string                                  `json:"resourceShareArns"`
	ResourceType      *string                                   `json:"resourceType"`
}

type ListResourcesRequest struct {
	QueryParams ListResourcesQueryParams
	Headers     ListResourcesHeaders
	Request     ListResourcesRequestBody `request:"mediaType=application/json"`
}

type ListResourcesResponse struct {
	ContentType                  string
	InvalidNextTokenException    *interface{}
	InvalidParameterException    *interface{}
	InvalidResourceTypeException *interface{}
	ListResourcesResponse        *shared.ListResourcesResponse
	MalformedArnException        *interface{}
	ServerInternalException      *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	UnknownResourceException     *interface{}
}
