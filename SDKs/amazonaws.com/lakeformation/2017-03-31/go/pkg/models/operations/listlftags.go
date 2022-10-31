package operations

import (
	"openapi/pkg/models/shared"
)

type ListLfTagsXAmzTargetEnum string

const (
	ListLfTagsXAmzTargetEnumAwsLakeFormationListLfTags ListLfTagsXAmzTargetEnum = "AWSLakeFormation.ListLFTags"
)

type ListLfTagsHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListLfTagsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
