package operations

import (
	"openapi/pkg/models/shared"
)

type CreateActivityXAmzTargetEnum string

const (
	CreateActivityXAmzTargetEnumAwsStepFunctionsCreateActivity CreateActivityXAmzTargetEnum = "AWSStepFunctions.CreateActivity"
)

type CreateActivityHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateActivityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateActivityRequest struct {
	Headers CreateActivityHeaders
	Request shared.CreateActivityInput `request:"mediaType=application/json"`
}

type CreateActivityResponse struct {
	ActivityLimitExceeded *interface{}
	ContentType           string
	CreateActivityOutput  *shared.CreateActivityOutput
	InvalidName           *interface{}
	StatusCode            int64
	TooManyTags           *interface{}
}
