package operations

import (
	"openapi/pkg/models/shared"
)

type GetLoggingConfigurationXAmzTargetEnum string

const (
	GetLoggingConfigurationXAmzTargetEnumAwswaf20150824GetLoggingConfiguration GetLoggingConfigurationXAmzTargetEnum = "AWSWAF_20150824.GetLoggingConfiguration"
)

type GetLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetLoggingConfigurationXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
