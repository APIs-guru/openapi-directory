package operations

import (
	"openapi/pkg/models/shared"
)

type CreateResourceShareHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateResourceShareRequestBody struct {
	AllowExternalPrincipals *bool        `json:"allowExternalPrincipals"`
	ClientToken             *string      `json:"clientToken"`
	Name                    string       `json:"name"`
	PermissionArns          []string     `json:"permissionArns"`
	Principals              []string     `json:"principals"`
	ResourceArns            []string     `json:"resourceArns"`
	Tags                    []shared.Tag `json:"tags"`
}

type CreateResourceShareRequest struct {
	Headers CreateResourceShareHeaders
	Request CreateResourceShareRequestBody `request:"mediaType=application/json"`
}

type CreateResourceShareResponse struct {
	ContentType                          string
	CreateResourceShareResponse          *shared.CreateResourceShareResponse
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
	TagPolicyViolationException          *interface{}
	UnknownResourceException             *interface{}
}
