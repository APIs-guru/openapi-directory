package operations

import (
	"openapi/pkg/models/shared"
)

type ListCodeRepositoriesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListCodeRepositoriesXAmzTargetEnum string

const (
	ListCodeRepositoriesXAmzTargetEnumSageMakerListCodeRepositories ListCodeRepositoriesXAmzTargetEnum = "SageMaker.ListCodeRepositories"
)

type ListCodeRepositoriesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListCodeRepositoriesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListCodeRepositoriesRequest struct {
	QueryParams ListCodeRepositoriesQueryParams
	Headers     ListCodeRepositoriesHeaders
	Request     shared.ListCodeRepositoriesInput `request:"mediaType=application/json"`
}

type ListCodeRepositoriesResponse struct {
	ContentType                string
	ListCodeRepositoriesOutput *shared.ListCodeRepositoriesOutput
	StatusCode                 int64
}
