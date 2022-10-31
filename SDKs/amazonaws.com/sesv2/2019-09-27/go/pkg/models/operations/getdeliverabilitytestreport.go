package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeliverabilityTestReportPathParams struct {
	ReportID string `pathParam:"style=simple,explode=false,name=ReportId"`
}

type GetDeliverabilityTestReportHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeliverabilityTestReportRequest struct {
	PathParams GetDeliverabilityTestReportPathParams
	Headers    GetDeliverabilityTestReportHeaders
}

type GetDeliverabilityTestReportResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	GetDeliverabilityTestReportResponse *shared.GetDeliverabilityTestReportResponse
	NotFoundException                   *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
}
