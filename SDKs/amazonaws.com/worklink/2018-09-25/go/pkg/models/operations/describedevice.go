package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeDeviceRequestBody struct {
	DeviceID string `json:"DeviceId"`
	FleetArn string `json:"FleetArn"`
}

type DescribeDeviceRequest struct {
	Headers DescribeDeviceHeaders
	Request DescribeDeviceRequestBody `request:"mediaType=application/json"`
}

type DescribeDeviceResponse struct {
	ContentType                  string
	DescribeDeviceResponse       *shared.DescribeDeviceResponse
	InternalServerErrorException *interface{}
	InvalidRequestException      *interface{}
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
