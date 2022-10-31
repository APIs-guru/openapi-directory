package operations

import (
	"openapi/pkg/models/shared"
)

type ListLoggingConfigurationsXAmzTargetEnum string

const (
	ListLoggingConfigurationsXAmzTargetEnumAwswafRegional20161128ListLoggingConfigurations ListLoggingConfigurationsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListLoggingConfigurations"
)

type ListLoggingConfigurationsHeaders struct {
	XAmzAlgorithm     *string                                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLoggingConfigurationsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
