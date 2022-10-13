package operations

import (
	"openapi/pkg/models/shared"
)

type ListLfTagsXAmzTargetEnum string

const (
	ListLfTagsXAmzTargetEnumAwsLakeFormationListLfTags ListLfTagsXAmzTargetEnum = "AWSLakeFormation.ListLFTags"
)

type ListLfTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLfTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListLfTagsRequest struct {
	Headers ListLfTagsHeaders
	Request shared.ListLfTagsRequest `request:"mediaType=application/json"`
}

type ListLfTagsResponse struct {
	ContentType               string
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	ListLfTagsResponse        *shared.ListLfTagsResponse
	OperationTimeoutException *interface{}
	StatusCode                int64
}
