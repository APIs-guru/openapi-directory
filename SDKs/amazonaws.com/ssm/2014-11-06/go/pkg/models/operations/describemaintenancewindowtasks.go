package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMaintenanceWindowTasksQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMaintenanceWindowTasksXAmzTargetEnum string

const (
	DescribeMaintenanceWindowTasksXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowTasks DescribeMaintenanceWindowTasksXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowTasks"
)

type DescribeMaintenanceWindowTasksHeaders struct {
	XAmzAlgorithm     *string                                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMaintenanceWindowTasksXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMaintenanceWindowTasksRequest struct {
	QueryParams DescribeMaintenanceWindowTasksQueryParams
	Headers     DescribeMaintenanceWindowTasksHeaders
	Request     shared.DescribeMaintenanceWindowTasksRequest `request:"mediaType=application/json"`
}

type DescribeMaintenanceWindowTasksResponse struct {
	ContentType                          string
	DescribeMaintenanceWindowTasksResult *shared.DescribeMaintenanceWindowTasksResult
	DoesNotExistException                *interface{}
	InternalServerError                  *interface{}
	StatusCode                           int64
}
