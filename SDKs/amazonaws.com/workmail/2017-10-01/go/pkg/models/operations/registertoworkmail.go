package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterToWorkMailXAmzTargetEnum string

const (
	RegisterToWorkMailXAmzTargetEnumWorkMailServiceRegisterToWorkMail RegisterToWorkMailXAmzTargetEnum = "WorkMailService.RegisterToWorkMail"
)

type RegisterToWorkMailHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterToWorkMailXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RegisterToWorkMailRequest struct {
	Headers RegisterToWorkMailHeaders
	Request shared.RegisterToWorkMailRequest `request:"mediaType=application/json"`
}

type RegisterToWorkMailResponse struct {
	ContentType                                   string
	DirectoryServiceAuthenticationFailedException *interface{}
	DirectoryUnavailableException                 *interface{}
	EmailAddressInUseException                    *interface{}
	EntityAlreadyRegisteredException              *interface{}
	EntityNotFoundException                       *interface{}
	EntityStateException                          *interface{}
	InvalidParameterException                     *interface{}
	MailDomainNotFoundException                   *interface{}
	MailDomainStateException                      *interface{}
	OrganizationNotFoundException                 *interface{}
	OrganizationStateException                    *interface{}
	RegisterToWorkMailResponse                    map[string]interface{}
	StatusCode                                    int64
}
