package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeExportTasksXAmzTargetEnum string

const (
	DescribeExportTasksXAmzTargetEnumLogs20140328DescribeExportTasks DescribeExportTasksXAmzTargetEnum = "Logs_20140328.DescribeExportTasks"
)

type DescribeExportTasksHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeExportTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeExportTasksRequest struct {
	Headers DescribeExportTasksHeaders
	Request shared.DescribeExportTasksRequest `request:"mediaType=application/json"`
}

type DescribeExportTasksResponse struct {
	ContentType                 string
	DescribeExportTasksResponse *shared.DescribeExportTasksResponse
	InvalidParameterException   *interface{}
	ServiceUnavailableException *interface{}
	StatusCode                  int64
}
