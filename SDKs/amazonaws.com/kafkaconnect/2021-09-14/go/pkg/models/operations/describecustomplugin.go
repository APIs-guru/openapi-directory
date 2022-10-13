package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeCustomPluginPathParams struct {
	CustomPluginArn string `pathParam:"style=simple,explode=false,name=customPluginArn"`
}

type DescribeCustomPluginHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeCustomPluginRequest struct {
	PathParams DescribeCustomPluginPathParams
	Headers    DescribeCustomPluginHeaders
}

type DescribeCustomPluginResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	DescribeCustomPluginResponse *shared.DescribeCustomPluginResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	NotFoundException            *interface{}
	ServiceUnavailableException  *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	UnauthorizedException        *interface{}
}
