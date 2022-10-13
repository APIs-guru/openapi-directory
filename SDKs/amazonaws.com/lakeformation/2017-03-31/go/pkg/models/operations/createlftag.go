package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLfTagXAmzTargetEnum string

const (
	CreateLfTagXAmzTargetEnumAwsLakeFormationCreateLfTag CreateLfTagXAmzTargetEnum = "AWSLakeFormation.CreateLFTag"
)

type CreateLfTagHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateLfTagXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateLfTagRequest struct {
	Headers CreateLfTagHeaders
	Request shared.CreateLfTagRequest `request:"mediaType=application/json"`
}

type CreateLfTagResponse struct {
	AccessDeniedException                *interface{}
	ContentType                          string
	CreateLfTagResponse                  map[string]interface{}
	EntityNotFoundException              *interface{}
	InternalServiceException             *interface{}
	InvalidInputException                *interface{}
	OperationTimeoutException            *interface{}
	ResourceNumberLimitExceededException *interface{}
	StatusCode                           int64
}
