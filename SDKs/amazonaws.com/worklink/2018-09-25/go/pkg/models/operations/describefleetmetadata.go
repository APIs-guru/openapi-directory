package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeFleetMetadataHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeFleetMetadataRequestBody struct {
	FleetArn string `json:"FleetArn"`
}

type DescribeFleetMetadataRequest struct {
	Headers DescribeFleetMetadataHeaders
	Request DescribeFleetMetadataRequestBody `request:"mediaType=application/json"`
}

type DescribeFleetMetadataResponse struct {
	ContentType                   string
	DescribeFleetMetadataResponse *shared.DescribeFleetMetadataResponse
	InternalServerErrorException  *interface{}
	InvalidRequestException       *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	TooManyRequestsException      *interface{}
	UnauthorizedException         *interface{}
}
