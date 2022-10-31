package operations

import (
	"openapi/pkg/models/shared"
)

type CreateActivityXAmzTargetEnum string

const (
	CreateActivityXAmzTargetEnumAwsStepFunctionsCreateActivity CreateActivityXAmzTargetEnum = "AWSStepFunctions.CreateActivity"
)

type CreateActivityHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateActivityXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
