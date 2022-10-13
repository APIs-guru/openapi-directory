package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDatasetExportJobXAmzTargetEnum string

const (
	DescribeDatasetExportJobXAmzTargetEnumAmazonPersonalizeDescribeDatasetExportJob DescribeDatasetExportJobXAmzTargetEnum = "AmazonPersonalize.DescribeDatasetExportJob"
)

type DescribeDatasetExportJobHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeDatasetExportJobXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DescribeDatasetExportJobRequest struct {
	Headers DescribeDatasetExportJobHeaders
	Request shared.DescribeDatasetExportJobRequest `request:"mediaType=application/json"`
}

type DescribeDatasetExportJobResponse struct {
	ContentType                      string
	DescribeDatasetExportJobResponse *shared.DescribeDatasetExportJobResponse
	InvalidInputException            *interface{}
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
}
