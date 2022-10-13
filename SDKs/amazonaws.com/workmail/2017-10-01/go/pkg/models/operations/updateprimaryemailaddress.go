package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePrimaryEmailAddressXAmzTargetEnum string

const (
	UpdatePrimaryEmailAddressXAmzTargetEnumWorkMailServiceUpdatePrimaryEmailAddress UpdatePrimaryEmailAddressXAmzTargetEnum = "WorkMailService.UpdatePrimaryEmailAddress"
)

type UpdatePrimaryEmailAddressHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePrimaryEmailAddressXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdatePrimaryEmailAddressRequest struct {
	Headers UpdatePrimaryEmailAddressHeaders
	Request shared.UpdatePrimaryEmailAddressRequest `request:"mediaType=application/json"`
}

type UpdatePrimaryEmailAddressResponse struct {
	ContentType                                   string
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	EmailAddressInUseException                    *interface{}
	EntityNotFoundException                       *interface{}
	EntityStateException                          *interface{}
	InvalidParameterException                     *interface{}
	MailDomainNotFoundException                   *interface{}
	MailDomainStateException                      *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	StatusCode                                    int64
	UnsupportedOperationException                 *interface{}
	UpdatePrimaryEmailAddressResponse             map[string]interface{}
}
