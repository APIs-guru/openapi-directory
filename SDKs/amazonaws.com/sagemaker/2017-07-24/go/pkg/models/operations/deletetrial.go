package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteTrialXAmzTargetEnum string

const (
	DeleteTrialXAmzTargetEnumSageMakerDeleteTrial DeleteTrialXAmzTargetEnum = "SageMaker.DeleteTrial"
)

type DeleteTrialHeaders struct {
	XAmzAlgorithm     *string                   `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteTrialXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteTrialRequest struct {
	Headers DeleteTrialHeaders
	Request shared.DeleteTrialRequest `request:"mediaType=application/json"`
}

type DeleteTrialResponse struct {
	ContentType         string
	DeleteTrialResponse *shared.DeleteTrialResponse
	ResourceNotFound    *interface{}
	StatusCode          int64
}
