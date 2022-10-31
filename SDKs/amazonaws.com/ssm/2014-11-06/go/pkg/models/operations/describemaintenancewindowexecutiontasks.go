package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMaintenanceWindowExecutionTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum string

const (
	DescribeMaintenanceWindowExecutionTasksXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowExecutionTasks DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowExecutionTasks"
)

type DescribeMaintenanceWindowExecutionTasksHeaders struct {
	XAmzAlgorithm     *string                                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMaintenanceWindowExecutionTasksRequest struct {
	QueryParams DescribeMaintenanceWindowExecutionTasksQueryParams
	Headers     DescribeMaintenanceWindowExecutionTasksHeaders
	Request     shared.DescribeMaintenanceWindowExecutionTasksRequest `request:"mediaType=application/json"`
}

type DescribeMaintenanceWindowExecutionTasksResponse struct {
	ContentType                                   string
	DescribeMaintenanceWindowExecutionTasksResult *shared.DescribeMaintenanceWindowExecutionTasksResult
	DoesNotExistException                         *interface{}
	InternalServerError                           *interface{}
	StatusCode                                    int64
}
