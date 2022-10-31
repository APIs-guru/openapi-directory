package operations

import (
	"openapi/pkg/models/shared"
)

type GetDeviceFleetReportXAmzTargetEnum string

const (
	GetDeviceFleetReportXAmzTargetEnumSageMakerGetDeviceFleetReport GetDeviceFleetReportXAmzTargetEnum = "SageMaker.GetDeviceFleetReport"
)

type GetDeviceFleetReportHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetDeviceFleetReportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetDeviceFleetReportRequest struct {
	Headers GetDeviceFleetReportHeaders
	Request shared.GetDeviceFleetReportRequest `request:"mediaType=application/json"`
}

type GetDeviceFleetReportResponse struct {
	ContentType                  string
	GetDeviceFleetReportResponse *shared.GetDeviceFleetReportResponse
	StatusCode                   int64
}
