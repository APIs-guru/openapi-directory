package operations

import (
	"openapi/pkg/models/shared"
)

type SearchTablesByLfTagsXAmzTargetEnum string

const (
	SearchTablesByLfTagsXAmzTargetEnumAwsLakeFormationSearchTablesByLfTags SearchTablesByLfTagsXAmzTargetEnum = "AWSLakeFormation.SearchTablesByLFTags"
)

type SearchTablesByLfTagsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SearchTablesByLfTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SearchTablesByLfTagsRequest struct {
	Headers SearchTablesByLfTagsHeaders
	Request shared.SearchTablesByLfTagsRequest `request:"mediaType=application/json"`
}

type SearchTablesByLfTagsResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	EntityNotFoundException      *interface{}
	GlueEncryptionException      *interface{}
	InternalServiceException     *interface{}
	InvalidInputException        *interface{}
	OperationTimeoutException    *interface{}
	SearchTablesByLfTagsResponse *shared.SearchTablesByLfTagsResponse
	StatusCode                   int64
}
