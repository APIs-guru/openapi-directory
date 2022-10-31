package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourcesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListResourcesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListResourcesRequestBodyResourceOwnerEnum string

const (
	ListResourcesRequestBodyResourceOwnerEnumSelf          ListResourcesRequestBodyResourceOwnerEnum = "SELF"
	ListResourcesRequestBodyResourceOwnerEnumOtherAccounts ListResourcesRequestBodyResourceOwnerEnum = "OTHER-ACCOUNTS"
)

type ListResourcesRequestBody struct {
	MaxResults        *int64                                    `json:"maxResults,omitempty"`
	NextToken         *string                                   `json:"nextToken,omitempty"`
	Principal         *string                                   `json:"principal,omitempty"`
	ResourceArns      []string                                  `json:"resourceArns,omitempty"`
	ResourceOwner     ListResourcesRequestBodyResourceOwnerEnum `json:"resourceOwner"`
	ResourceShareArns []string                                  `json:"resourceShareArns,omitempty"`
	ResourceType      *string                                   `json:"resourceType,omitempty"`
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
