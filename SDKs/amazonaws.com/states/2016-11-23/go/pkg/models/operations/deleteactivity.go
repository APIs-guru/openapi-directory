package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteActivityXAmzTargetEnum string

const (
	DeleteActivityXAmzTargetEnumAwsStepFunctionsDeleteActivity DeleteActivityXAmzTargetEnum = "AWSStepFunctions.DeleteActivity"
)

type DeleteActivityHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteActivityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
