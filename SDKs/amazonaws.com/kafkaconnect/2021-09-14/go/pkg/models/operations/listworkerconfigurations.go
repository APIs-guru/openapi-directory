package operations

import (
	"openapi/pkg/models/shared"
)

type ListWorkerConfigurationsQueryParams struct {
	MaxResults *int64  `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListWorkerConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
