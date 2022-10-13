package operations

import (
	"openapi/pkg/models/shared"
)

type ListStreamProcessorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListStreamProcessorsXAmzTargetEnum string

const (
	ListStreamProcessorsXAmzTargetEnumRekognitionServiceListStreamProcessors ListStreamProcessorsXAmzTargetEnum = "RekognitionService.ListStreamProcessors"
)

type ListStreamProcessorsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListStreamProcessorsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListStreamProcessorsRequest struct {
	QueryParams ListStreamProcessorsQueryParams
	Headers     ListStreamProcessorsHeaders
	Request     shared.ListStreamProcessorsRequest `request:"mediaType=application/json"`
}

type ListStreamProcessorsResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ListStreamProcessorsResponse           *shared.ListStreamProcessorsResponse
	ProvisionedThroughputExceededException *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
