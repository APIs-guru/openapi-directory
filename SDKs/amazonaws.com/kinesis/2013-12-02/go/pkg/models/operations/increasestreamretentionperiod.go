package operations

import (
	"openapi/pkg/models/shared"
)

type IncreaseStreamRetentionPeriodXAmzTargetEnum string

const (
	IncreaseStreamRetentionPeriodXAmzTargetEnumKinesis20131202IncreaseStreamRetentionPeriod IncreaseStreamRetentionPeriodXAmzTargetEnum = "Kinesis_20131202.IncreaseStreamRetentionPeriod"
)

type IncreaseStreamRetentionPeriodHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        IncreaseStreamRetentionPeriodXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type IncreaseStreamRetentionPeriodRequest struct {
	Headers IncreaseStreamRetentionPeriodHeaders
	Request shared.IncreaseStreamRetentionPeriodInput `request:"mediaType=application/json"`
}

type IncreaseStreamRetentionPeriodResponse struct {
	ContentType               string
	InvalidArgumentException  *interface{}
	LimitExceededException    *interface{}
	ResourceInUseException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
