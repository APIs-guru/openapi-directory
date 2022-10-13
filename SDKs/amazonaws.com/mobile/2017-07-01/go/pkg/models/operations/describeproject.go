package operations

import (
	"openapi/pkg/models/shared"
)

type DescribeProjectQueryParams struct {
	ProjectID         string `queryParam:"style=form,explode=true,name=projectId"`
	SyncFromResources *bool  `queryParam:"style=form,explode=true,name=syncFromResources"`
}

type DescribeProjectHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DescribeProjectRequest struct {
	QueryParams DescribeProjectQueryParams
	Headers     DescribeProjectHeaders
}

type DescribeProjectResponse struct {
	BadRequestException         *shared.BadRequestException
	ContentType                 string
	DescribeProjectResult       *shared.DescribeProjectResult
	InternalFailureException    *shared.InternalFailureException
	NotFoundException           *shared.NotFoundException
	ServiceUnavailableException *shared.ServiceUnavailableException
	StatusCode                  int64
	TooManyRequestsException    *shared.TooManyRequestsException
	UnauthorizedException       *shared.UnauthorizedException
}
