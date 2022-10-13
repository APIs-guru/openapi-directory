package operations

import (
	"openapi/pkg/models/shared"
)

type ListLoggingConfigurationsXAmzTargetEnum string

const (
	ListLoggingConfigurationsXAmzTargetEnumAwswaf20150824ListLoggingConfigurations ListLoggingConfigurationsXAmzTargetEnum = "AWSWAF_20150824.ListLoggingConfigurations"
)

type ListLoggingConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLoggingConfigurationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLoggingConfigurationsRequest struct {
	Headers ListLoggingConfigurationsHeaders
	Request shared.ListLoggingConfigurationsRequest `request:"mediaType=application/json"`
}

type ListLoggingConfigurationsResponse struct {
	ContentType                       string
	ListLoggingConfigurationsResponse *shared.ListLoggingConfigurationsResponse
	StatusCode                        int64
	WafInternalErrorException         *interface{}
	WafInvalidParameterException      *interface{}
	WafNonexistentItemException       *interface{}
}
