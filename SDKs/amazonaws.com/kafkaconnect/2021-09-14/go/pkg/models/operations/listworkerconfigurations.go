package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkerConfigurationsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListWorkerConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListWorkerConfigurationsRequest struct {
	QueryParams ListWorkerConfigurationsQueryParams
	Headers     ListWorkerConfigurationsHeaders
}

type ListWorkerConfigurationsResponse struct {
	BadRequestException              *interface{}
	ContentType                      string
	ForbiddenException               *interface{}
	InternalServerErrorException     *interface{}
	ListWorkerConfigurationsResponse *shared.ListWorkerConfigurationsResponse
	NotFoundException                *interface{}
	ServiceUnavailableException      *interface{}
	StatusCode                       int64
	TooManyRequestsException         *interface{}
	UnauthorizedException            *interface{}
}
