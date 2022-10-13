package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum string

const (
	CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceCreateInstanceAccessControlAttributeConfiguration CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum = "SWBExternalService.CreateInstanceAccessControlAttributeConfiguration"
)

type CreateInstanceAccessControlAttributeConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInstanceAccessControlAttributeConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateInstanceAccessControlAttributeConfigurationRequest struct {
	Headers CreateInstanceAccessControlAttributeConfigurationHeaders
	Request shared.CreateInstanceAccessControlAttributeConfigurationRequest `request:"mediaType=application/json"`
}

type CreateInstanceAccessControlAttributeConfigurationResponse struct {
	AccessDeniedException                                     *interface{}
	ConflictException                                         *interface{}
	ContentType                                               string
	CreateInstanceAccessControlAttributeConfigurationResponse map[string]interface{}
	InternalServerException                                   *interface{}
	ResourceNotFoundException                                 *interface{}
	StatusCode                                                int64
	ThrottlingException                                       *interface{}
	ValidationException                                       *interface{}
}
