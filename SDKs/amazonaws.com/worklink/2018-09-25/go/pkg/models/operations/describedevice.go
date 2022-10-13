package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeDeviceHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
