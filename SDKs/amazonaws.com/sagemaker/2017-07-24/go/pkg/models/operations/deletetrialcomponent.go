package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTrialComponentXAmzTargetEnum string

const (
	DeleteTrialComponentXAmzTargetEnumSageMakerDeleteTrialComponent DeleteTrialComponentXAmzTargetEnum = "SageMaker.DeleteTrialComponent"
)

type DeleteTrialComponentHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTrialComponentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTrialComponentRequest struct {
	Headers DeleteTrialComponentHeaders
	Request shared.DeleteTrialComponentRequest `request:"mediaType=application/json"`
}

type DeleteTrialComponentResponse struct {
	ContentType                  string
	DeleteTrialComponentResponse *shared.DeleteTrialComponentResponse
	ResourceNotFound             *interface{}
	StatusCode                   int64
}
