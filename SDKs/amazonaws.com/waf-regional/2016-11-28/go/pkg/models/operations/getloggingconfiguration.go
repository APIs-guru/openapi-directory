package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoggingConfigurationXAmzTargetEnum string

const (
	GetLoggingConfigurationXAmzTargetEnumAwswafRegional20161128GetLoggingConfiguration GetLoggingConfigurationXAmzTargetEnum = "AWSWAF_Regional_20161128.GetLoggingConfiguration"
)

type GetLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLoggingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetLoggingConfigurationRequest struct {
	Headers GetLoggingConfigurationHeaders
	Request shared.GetLoggingConfigurationRequest `request:"mediaType=application/json"`
}

type GetLoggingConfigurationResponse struct {
	ContentType                     string
	GetLoggingConfigurationResponse *shared.GetLoggingConfigurationResponse
	StatusCode                      int64
	WafInternalErrorException       *interface{}
	WafNonexistentItemException     *interface{}
}
