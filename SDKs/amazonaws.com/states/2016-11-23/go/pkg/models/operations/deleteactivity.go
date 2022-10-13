package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteActivityXAmzTargetEnum string

const (
	DeleteActivityXAmzTargetEnumAwsStepFunctionsDeleteActivity DeleteActivityXAmzTargetEnum = "AWSStepFunctions.DeleteActivity"
)

type DeleteActivityHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteActivityXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteActivityRequest struct {
	Headers DeleteActivityHeaders
	Request shared.DeleteActivityInput `request:"mediaType=application/json"`
}

type DeleteActivityResponse struct {
	ContentType          string
	DeleteActivityOutput map[string]interface{}
	InvalidArn           *interface{}
	StatusCode           int64
}
