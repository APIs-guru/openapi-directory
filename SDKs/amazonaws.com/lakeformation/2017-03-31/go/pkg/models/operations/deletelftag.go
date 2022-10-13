package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteLfTagXAmzTargetEnum string

const (
	DeleteLfTagXAmzTargetEnumAwsLakeFormationDeleteLfTag DeleteLfTagXAmzTargetEnum = "AWSLakeFormation.DeleteLFTag"
)

type DeleteLfTagHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteLfTagXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteLfTagRequest struct {
	Headers DeleteLfTagHeaders
	Request shared.DeleteLfTagRequest `request:"mediaType=application/json"`
}

type DeleteLfTagResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	DeleteLfTagResponse       map[string]interface{}
	EntityNotFoundException   *interface{}
	InternalServiceException  *interface{}
	InvalidInputException     *interface{}
	OperationTimeoutException *interface{}
	StatusCode                int64
}
