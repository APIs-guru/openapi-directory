package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum string

const (
	DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnumSwbExternalServiceDeleteInstanceAccessControlAttributeConfiguration DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum = "SWBExternalService.DeleteInstanceAccessControlAttributeConfiguration"
)

type DeleteInstanceAccessControlAttributeConfigurationHeaders struct {
	XAmzAlgorithm     *string                                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInstanceAccessControlAttributeConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteInstanceAccessControlAttributeConfigurationRequest struct {
	Headers DeleteInstanceAccessControlAttributeConfigurationHeaders
	Request shared.DeleteInstanceAccessControlAttributeConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteInstanceAccessControlAttributeConfigurationResponse struct {
	AccessDeniedException                                     *interface{}
	ConflictException                                         *interface{}
	ContentType                                               string
	DeleteInstanceAccessControlAttributeConfigurationResponse map[string]interface{}
	InternalServerException                                   *interface{}
	ResourceNotFoundException                                 *interface{}
	StatusCode                                                int64
	ThrottlingException                                       *interface{}
	ValidationException                                       *interface{}
}
