package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveLfTagsFromResourceXAmzTargetEnum string

const (
	RemoveLfTagsFromResourceXAmzTargetEnumAwsLakeFormationRemoveLfTagsFromResource RemoveLfTagsFromResourceXAmzTargetEnum = "AWSLakeFormation.RemoveLFTagsFromResource"
)

type RemoveLfTagsFromResourceHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RemoveLfTagsFromResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RemoveLfTagsFromResourceRequest struct {
	Headers RemoveLfTagsFromResourceHeaders
	Request shared.RemoveLfTagsFromResourceRequest `request:"mediaType=application/json"`
}

type RemoveLfTagsFromResourceResponse struct {
	AccessDeniedException            *interface{}
	ConcurrentModificationException  *interface{}
	ContentType                      string
	EntityNotFoundException          *interface{}
	GlueEncryptionException          *interface{}
	InternalServiceException         *interface{}
	InvalidInputException            *interface{}
	OperationTimeoutException        *interface{}
	RemoveLfTagsFromResourceResponse *shared.RemoveLfTagsFromResourceResponse
	StatusCode                       int64
}
