package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLfTagXAmzTargetEnum string

const (
	UpdateLfTagXAmzTargetEnumAwsLakeFormationUpdateLfTag UpdateLfTagXAmzTargetEnum = "AWSLakeFormation.UpdateLFTag"
)

type UpdateLfTagHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLfTagXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLfTagRequest struct {
	Headers UpdateLfTagHeaders
	Request shared.UpdateLfTagRequest `request:"mediaType=application/json"`
}

type UpdateLfTagResponse struct {
	AccessDeniedException           *interface{}
	ConcurrentModificationException *interface{}
	ContentType                     string
	EntityNotFoundException         *interface{}
	InternalServiceException        *interface{}
	InvalidInputException           *interface{}
	OperationTimeoutException       *interface{}
	StatusCode                      int64
	UpdateLfTagResponse             map[string]interface{}
}
