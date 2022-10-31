package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMaintenanceWindowsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMaintenanceWindowsXAmzTargetEnum string

const (
	DescribeMaintenanceWindowsXAmzTargetEnumAmazonSsmDescribeMaintenanceWindows DescribeMaintenanceWindowsXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindows"
)

type DescribeMaintenanceWindowsHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMaintenanceWindowsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMaintenanceWindowsRequest struct {
	QueryParams DescribeMaintenanceWindowsQueryParams
	Headers     DescribeMaintenanceWindowsHeaders
	Request     shared.DescribeMaintenanceWindowsRequest `request:"mediaType=application/json"`
}

type DescribeMaintenanceWindowsResponse struct {
	ContentType                      string
	DescribeMaintenanceWindowsResult *shared.DescribeMaintenanceWindowsResult
	InternalServerError              *interface{}
	StatusCode                       int64
}
