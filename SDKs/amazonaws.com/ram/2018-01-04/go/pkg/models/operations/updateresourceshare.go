package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourceShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
