package operations

import (
	"openapi/pkg/models/shared"
)

type GetSnowballUsageXAmzTargetEnum string

const (
	GetSnowballUsageXAmzTargetEnumAwsieSnowballJobManagementServiceGetSnowballUsage GetSnowballUsageXAmzTargetEnum = "AWSIESnowballJobManagementService.GetSnowballUsage"
)

type GetSnowballUsageHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSnowballUsageXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetSnowballUsageRequest struct {
	Headers GetSnowballUsageHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetSnowballUsageResponse struct {
	ContentType            string
	GetSnowballUsageResult *shared.GetSnowballUsageResult
	StatusCode             int64
}
