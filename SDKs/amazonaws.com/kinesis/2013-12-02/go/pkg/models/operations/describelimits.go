package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeLimitsXAmzTargetEnum string

const (
	DescribeLimitsXAmzTargetEnumKinesis20131202DescribeLimits DescribeLimitsXAmzTargetEnum = "Kinesis_20131202.DescribeLimits"
)

type DescribeLimitsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeLimitsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeLimitsRequest struct {
	Headers DescribeLimitsHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type DescribeLimitsResponse struct {
	ContentType            string
	DescribeLimitsOutput   *shared.DescribeLimitsOutput
	LimitExceededException *interface{}
	StatusCode             int64
}
