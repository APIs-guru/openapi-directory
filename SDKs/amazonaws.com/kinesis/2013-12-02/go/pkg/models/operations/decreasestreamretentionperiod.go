package operations

import (
	"openapi/pkg/models/shared"
)

type DecreaseStreamRetentionPeriodXAmzTargetEnum string

const (
	DecreaseStreamRetentionPeriodXAmzTargetEnumKinesis20131202DecreaseStreamRetentionPeriod DecreaseStreamRetentionPeriodXAmzTargetEnum = "Kinesis_20131202.DecreaseStreamRetentionPeriod"
)

type DecreaseStreamRetentionPeriodHeaders struct {
	XAmzAlgorithm     *string                                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DecreaseStreamRetentionPeriodXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DecreaseStreamRetentionPeriodRequest struct {
	Headers DecreaseStreamRetentionPeriodHeaders
	Request shared.DecreaseStreamRetentionPeriodInput `request:"mediaType=application/json"`
}

type DecreaseStreamRetentionPeriodResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
