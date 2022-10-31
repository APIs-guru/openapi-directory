package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeMaintenanceWindowScheduleQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type DescribeMaintenanceWindowScheduleXAmzTargetEnum string

const (
	DescribeMaintenanceWindowScheduleXAmzTargetEnumAmazonSsmDescribeMaintenanceWindowSchedule DescribeMaintenanceWindowScheduleXAmzTargetEnum = "AmazonSSM.DescribeMaintenanceWindowSchedule"
)

type DescribeMaintenanceWindowScheduleHeaders struct {
	XAmzAlgorithm     *string                                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMaintenanceWindowScheduleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DescribeMaintenanceWindowScheduleRequest struct {
	QueryParams DescribeMaintenanceWindowScheduleQueryParams
	Headers     DescribeMaintenanceWindowScheduleHeaders
	Request     shared.DescribeMaintenanceWindowScheduleRequest `request:"mediaType=application/json"`
}

type DescribeMaintenanceWindowScheduleResponse struct {
	ContentType                             string
	DescribeMaintenanceWindowScheduleResult *shared.DescribeMaintenanceWindowScheduleResult
	DoesNotExistException                   *interface{}
	InternalServerError                     *interface{}
	StatusCode                              int64
}
