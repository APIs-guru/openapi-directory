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
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DescribeMaintenanceWindowScheduleXAmzTargetEnum `header:"name=X-Amz-Target"`
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
