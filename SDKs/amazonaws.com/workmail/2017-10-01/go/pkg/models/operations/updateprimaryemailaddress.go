package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePrimaryEmailAddressXAmzTargetEnum string

const (
	UpdatePrimaryEmailAddressXAmzTargetEnumWorkMailServiceUpdatePrimaryEmailAddress UpdatePrimaryEmailAddressXAmzTargetEnum = "WorkMailService.UpdatePrimaryEmailAddress"
)

type UpdatePrimaryEmailAddressHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdatePrimaryEmailAddressXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
