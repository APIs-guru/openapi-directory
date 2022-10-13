package operations

import (
	"openapi/pkg/models/shared"
)

type ListPrincipalsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListPrincipalsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListPrincipalsRequestBodyResourceOwnerEnum string

const (
	ListPrincipalsRequestBodyResourceOwnerEnumSelf          ListPrincipalsRequestBodyResourceOwnerEnum = "SELF"
	ListPrincipalsRequestBodyResourceOwnerEnumOtherAccounts ListPrincipalsRequestBodyResourceOwnerEnum = "OTHER-ACCOUNTS"
)

type ListPrincipalsRequestBody struct {
	MaxResults        *int64                                     `json:"maxResults"`
	NextToken         *string                                    `json:"nextToken"`
	Principals        []string                                   `json:"principals"`
	ResourceArn       *string                                    `json:"resourceArn"`
	ResourceOwner     ListPrincipalsRequestBodyResourceOwnerEnum `json:"resourceOwner"`
	ResourceShareArns []string                                   `json:"resourceShareArns"`
	ResourceType      *string                                    `json:"resourceType"`
}

type ListPrincipalsRequest struct {
	QueryParams ListPrincipalsQueryParams
	Headers     ListPrincipalsHeaders
	Request     ListPrincipalsRequestBody `request:"mediaType=application/json"`
}

type ListPrincipalsResponse struct {
	ContentType                 string
	InvalidNextTokenException   *interface{}
	InvalidParameterException   *interface{}
	ListPrincipalsResponse      *shared.ListPrincipalsResponse
	MalformedArnException       *interface{}
	ServerInternalException     *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	UnknownResourceException    *interface{}
}
