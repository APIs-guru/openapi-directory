package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeRoutingControlPathParams struct {
	RoutingControlArn string `pathParam:"style=simple,explode=false,name=RoutingControlArn"`
}

type DescribeRoutingControlHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeRoutingControlRequest struct {
	PathParams DescribeRoutingControlPathParams
	Headers    DescribeRoutingControlHeaders
}

type DescribeRoutingControlResponse struct {
	AccessDeniedException          *interface{}
	ConflictException              *interface{}
	ContentType                    string
	DescribeRoutingControlResponse *shared.DescribeRoutingControlResponse
	InternalServerException        *interface{}
	ResourceNotFoundException      *interface{}
	StatusCode                     int64
	ThrottlingException            *interface{}
	ValidationException            *interface{}
}
