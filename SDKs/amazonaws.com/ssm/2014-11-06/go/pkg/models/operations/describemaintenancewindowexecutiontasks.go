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
	XAmzAlgorithm     *string                                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMaintenanceWindowExecutionTasksXAmzTargetEnum `header:"name=X-Amz-Target"`
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
