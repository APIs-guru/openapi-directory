package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateResourceXAmzTargetEnum string

const (
	UpdateResourceXAmzTargetEnumWorkMailServiceUpdateResource UpdateResourceXAmzTargetEnum = "WorkMailService.UpdateResource"
)

type UpdateResourceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateResourceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateResourceRequest struct {
	Headers UpdateResourceHeaders
	Request shared.UpdateResourceRequest `request:"mediaType=application/json"`
}

type UpdateResourceResponse struct {
	ContentType                   string
	DirectoryUnavailableException *interface{}
	EmailAddressInUseException    *interface{}
	EntityNotFoundException       *interface{}
	EntityStateException          *interface{}
	InvalidConfigurationException *interface{}
	MailDomainNotFoundException   *interface{}
	MailDomainStateException      *interface{}
	NameAvailabilityException     *interface{}
	OrganizationNotFoundException *interface{}
	OrganizationStateException    *interface{}
	StatusCode                    int64
	UpdateResourceResponse        map[string]interface{}
}
