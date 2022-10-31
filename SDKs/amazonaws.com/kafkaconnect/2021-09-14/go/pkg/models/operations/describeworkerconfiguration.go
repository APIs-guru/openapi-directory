package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeWorkerConfigurationPathParams struct {
	WorkerConfigurationArn string `pathParam:"style=simple,explode=false,name=workerConfigurationArn"`
}

type DescribeWorkerConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type DescribeWorkerConfigurationRequest struct {
	PathParams DescribeWorkerConfigurationPathParams
	Headers    DescribeWorkerConfigurationHeaders
}

type DescribeWorkerConfigurationResponse struct {
	BadRequestException                 *interface{}
	ContentType                         string
	DescribeWorkerConfigurationResponse *shared.DescribeWorkerConfigurationResponse
	ForbiddenException                  *interface{}
	InternalServerErrorException        *interface{}
	NotFoundException                   *interface{}
	ServiceUnavailableException         *interface{}
	StatusCode                          int64
	TooManyRequestsException            *interface{}
	UnauthorizedException               *interface{}
}
