package operations

import (
	"openapi/pkg/models/shared"
)

type GetContentModerationQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetContentModerationXAmzTargetEnum string

const (
	GetContentModerationXAmzTargetEnumRekognitionServiceGetContentModeration GetContentModerationXAmzTargetEnum = "RekognitionService.GetContentModeration"
)

type GetContentModerationHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContentModerationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContentModerationRequest struct {
	QueryParams GetContentModerationQueryParams
	Headers     GetContentModerationHeaders
	Request     shared.GetContentModerationRequest `request:"mediaType=application/json"`
}

type GetContentModerationResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	GetContentModerationResponse           *shared.GetContentModerationResponse
	InternalServerError                    *interface{}
	InvalidPaginationTokenException        *interface{}
	InvalidParameterException              *interface{}
	ProvisionedThroughputExceededException *interface{}
	ResourceNotFoundException              *interface{}
	StatusCode                             int64
	ThrottlingException                    *interface{}
}
