package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateResourceShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type AssociateResourceShareRequestBody struct {
	ClientToken      *string  `json:"clientToken"`
	Principals       []string `json:"principals"`
	ResourceArns     []string `json:"resourceArns"`
	ResourceShareArn string   `json:"resourceShareArn"`
}

type AssociateResourceShareRequest struct {
	Headers AssociateResourceShareHeaders
	Request AssociateResourceShareRequestBody `request:"mediaType=application/json"`
}

type AssociateResourceShareResponse struct {
	AssociateResourceShareResponse       *shared.AssociateResourceShareResponse
	ContentType                          string
	IdempotentParameterMismatchException *interface{}
	InvalidClientTokenException          *interface{}
	InvalidParameterException            *interface{}
	InvalidStateTransitionException      *interface{}
	MalformedArnException                *interface{}
	OperationNotPermittedException       *interface{}
	ResourceShareLimitExceededException  *interface{}
	ServerInternalException              *interface{}
	ServiceUnavailableException          *interface{}
	StatusCode                           int64
	UnknownResourceException             *interface{}
}
