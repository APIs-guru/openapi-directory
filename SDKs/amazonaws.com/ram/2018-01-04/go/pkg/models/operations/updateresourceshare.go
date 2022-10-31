package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourceShareHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateResourceShareRequestBody struct {
	AllowExternalPrincipals *bool   `json:"allowExternalPrincipals,omitempty"`
	ClientToken             *string `json:"clientToken,omitempty"`
	Name                    *string `json:"name,omitempty"`
	ResourceShareArn        string  `json:"resourceShareArn"`
}

type UpdateResourceShareRequest struct {
	Headers UpdateResourceShareHeaders
	Request UpdateResourceShareRequestBody `request:"mediaType=application/json"`
}

type UpdateResourceShareResponse struct {
	ContentType                          string
	IdempotentParameterMismatchException *interface{}
	InvalidClientTokenException          *interface{}
	InvalidParameterException            *interface{}
	MalformedArnException                *interface{}
	MissingRequiredParameterException    *interface{}
	OperationNotPermittedException       *interface{}
	ServerInternalException              *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UnknownResourceException             *interface{}
	UpdateResourceShareResponse          *shared.UpdateResourceShareResponse
}
