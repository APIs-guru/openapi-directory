package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeInferenceSchedulerXAmzTargetEnum string

const (
	DescribeInferenceSchedulerXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeInferenceScheduler DescribeInferenceSchedulerXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DescribeInferenceScheduler"
)

type DescribeInferenceSchedulerHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeInferenceSchedulerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeInferenceSchedulerRequest struct {
	Headers DescribeInferenceSchedulerHeaders
	Request shared.DescribeInferenceSchedulerRequest `request:"mediaType=application/json"`
}

type DescribeInferenceSchedulerResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	DescribeInferenceSchedulerResponse *shared.DescribeInferenceSchedulerResponse
	InternalServerException            *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
