package operations

import (
	"openapi/pkg/models/shared"
)

type ListMonitoringSchedulesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMonitoringSchedulesXAmzTargetEnum string

const (
	ListMonitoringSchedulesXAmzTargetEnumSageMakerListMonitoringSchedules ListMonitoringSchedulesXAmzTargetEnum = "SageMaker.ListMonitoringSchedules"
)

type ListMonitoringSchedulesHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListMonitoringSchedulesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListMonitoringSchedulesRequest struct {
	QueryParams ListMonitoringSchedulesQueryParams
	Headers     ListMonitoringSchedulesHeaders
	Request     shared.ListMonitoringSchedulesRequest `request:"mediaType=application/json"`
}

type ListMonitoringSchedulesResponse struct {
	ContentType                     string
	ListMonitoringSchedulesResponse *shared.ListMonitoringSchedulesResponse
	StatusCode                      int64
}
