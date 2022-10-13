package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum string

const (
	UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceUpdateInstanceAccessControlAttributeConfiguration UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum = "SWBExternalService.UpdateInstanceAccessControlAttributeConfiguration"
)

type UpdateInstanceAccessControlAttributeConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateInstanceAccessControlAttributeConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateInstanceAccessControlAttributeConfigurationRequest struct {
	Headers UpdateInstanceAccessControlAttributeConfigurationHeaders
	Request shared.UpdateInstanceAccessControlAttributeConfigurationRequest `request:"mediaType=application/json"`
}

type UpdateInstanceAccessControlAttributeConfigurationResponse struct {
	AccessDeniedException                                     *interface{}
	ConflictException                                         *interface{}
	ContentType                                               string
	InternalServerException                                   *interface{}
	ResourceNotFoundException                                 *interface{}
	StatusCode                                                int64
	ThrottlingException                                       *interface{}
	UpdateInstanceAccessControlAttributeConfigurationResponse map[string]interface{}
	ValidationException                                       *interface{}
}
