package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLoggingConfigurationXAmzTargetEnum string

const (
	DeleteLoggingConfigurationXAmzTargetEnumAwswaf20150824DeleteLoggingConfiguration DeleteLoggingConfigurationXAmzTargetEnum = "AWSWAF_20150824.DeleteLoggingConfiguration"
)

type DeleteLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLoggingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLoggingConfigurationRequest struct {
	Headers DeleteLoggingConfigurationHeaders
	Request shared.DeleteLoggingConfigurationRequest `request:"mediaType=application/json"`
}

type DeleteLoggingConfigurationResponse struct {
	ContentType                        string
	DeleteLoggingConfigurationResponse map[string]interface{}
	StatusCode                         int64
	WafInternalErrorException          *interface{}
	WafNonexistentItemException        *interface{}
	WafStaleDataException              *interface{}
}
