package operations

import (
	"openapi/pkg/models/shared"
)

type AddLfTagsToResourceXAmzTargetEnum string

const (
	AddLfTagsToResourceXAmzTargetEnumAwsLakeFormationAddLfTagsToResource AddLfTagsToResourceXAmzTargetEnum = "AWSLakeFormation.AddLFTagsToResource"
)

type AddLfTagsToResourceHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AddLfTagsToResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AddLfTagsToResourceRequest struct {
	Headers AddLfTagsToResourceHeaders
	Request shared.AddLfTagsToResourceRequest `request:"mediaType=application/json"`
}

type AddLfTagsToResourceResponse struct {
	AccessDeniedException           *interface{}
	AddLfTagsToResourceResponse     *shared.AddLfTagsToResourceResponse
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
}
