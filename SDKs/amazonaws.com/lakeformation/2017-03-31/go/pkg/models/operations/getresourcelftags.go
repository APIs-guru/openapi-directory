package operations

import (
	"openapi/pkg/models/shared"
)

type GetResourceLfTagsXAmzTargetEnum string

const (
	GetResourceLfTagsXAmzTargetEnumAwsLakeFormationGetResourceLfTags GetResourceLfTagsXAmzTargetEnum = "AWSLakeFormation.GetResourceLFTags"
)

type GetResourceLfTagsHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetResourceLfTagsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetResourceLfTagsRequest struct {
	Headers GetResourceLfTagsHeaders
	Request shared.GetResourceLfTagsRequest `request:"mediaType=application/json"`
}

type GetResourceLfTagsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	EntityNotFoundException   *interface{}
	GetResourceLfTagsResponse *shared.GetResourceLfTagsResponse
	GlueEncryptionException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
