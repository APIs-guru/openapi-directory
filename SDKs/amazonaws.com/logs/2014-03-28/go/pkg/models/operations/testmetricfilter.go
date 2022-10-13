package operations

import (
	"openapi/pkg/models/shared"
)

type TestMetricFilterXAmzTargetEnum string

const (
	TestMetricFilterXAmzTargetEnumLogs20140328TestMetricFilter TestMetricFilterXAmzTargetEnum = "Logs_20140328.TestMetricFilter"
)

type TestMetricFilterHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TestMetricFilterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TestMetricFilterRequest struct {
	Headers TestMetricFilterHeaders
	Request shared.TestMetricFilterRequest `request:"mediaType=application/json"`
}

type TestMetricFilterResponse struct {
	ContentType                 string
	InvalidParameterException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
	TestMetricFilterResponse    *shared.TestMetricFilterResponse
}
