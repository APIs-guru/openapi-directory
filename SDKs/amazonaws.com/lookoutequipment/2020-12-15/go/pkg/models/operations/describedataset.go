package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDatasetXAmzTargetEnum string

const (
	DescribeDatasetXAmzTargetEnumAwsLookoutEquipmentFrontendServiceDescribeDataset DescribeDatasetXAmzTargetEnum = "AWSLookoutEquipmentFrontendService.DescribeDataset"
)

type DescribeDatasetHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDatasetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDatasetRequest struct {
	Headers DescribeDatasetHeaders
	Request shared.DescribeDatasetRequest `request:"mediaType=application/json"`
}

type DescribeDatasetResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DescribeDatasetResponse   *shared.DescribeDatasetResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
