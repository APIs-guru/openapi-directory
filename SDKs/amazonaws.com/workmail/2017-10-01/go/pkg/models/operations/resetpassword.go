package operations

import (
	"openapi/pkg/models/shared"
)

type ResetPasswordXAmzTargetEnum string

const (
	ResetPasswordXAmzTargetEnumWorkMailServiceResetPassword ResetPasswordXAmzTargetEnum = "WorkMailService.ResetPassword"
)

type ResetPasswordHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ResetPasswordXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ResetPasswordRequest struct {
	Headers ResetPasswordHeaders
	Request shared.ResetPasswordRequest `request:"mediaType=application/json"`
}

type ResetPasswordResponse struct {
	ContentType                                   string
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	EntityNotFoundException                       *interface{}
	EntityStateException                          *interface{}
	InvalidParameterException                     *interface{}
	InvalidPasswordException                      *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	ResetPasswordResponse                         map[string]interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
}
