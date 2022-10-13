package operations

import (
	"openapi/pkg/models/shared"
)

type PutLoggingConfigurationXAmzTargetEnum string

const (
	PutLoggingConfigurationXAmzTargetEnumAwswaf20150824PutLoggingConfiguration PutLoggingConfigurationXAmzTargetEnum = "AWSWAF_20150824.PutLoggingConfiguration"
)

type PutLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutLoggingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutLoggingConfigurationRequest struct {
	Headers PutLoggingConfigurationHeaders
	Request shared.PutLoggingConfigurationRequest `request:"mediaType=application/json"`
}

type PutLoggingConfigurationResponse struct {
	ContentType                        string
	PutLoggingConfigurationResponse    *shared.PutLoggingConfigurationResponse
	StatusCode                         int64
	WafInternalErrorException          *interface{}
	WafNonexistentItemException        *interface{}
	WafServiceLinkedRoleErrorException *interface{}
	WafStaleDataException              *interface{}
}
