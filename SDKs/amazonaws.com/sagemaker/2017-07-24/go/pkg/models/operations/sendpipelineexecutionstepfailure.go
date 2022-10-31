package operations

import (
	"openapi/pkg/models/shared"
)

type SendPipelineExecutionStepFailureXAmzTargetEnum string

const (
	SendPipelineExecutionStepFailureXAmzTargetEnumSageMakerSendPipelineExecutionStepFailure SendPipelineExecutionStepFailureXAmzTargetEnum = "SageMaker.SendPipelineExecutionStepFailure"
)

type SendPipelineExecutionStepFailureHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SendPipelineExecutionStepFailureXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SendPipelineExecutionStepFailureRequest struct {
	Headers SendPipelineExecutionStepFailureHeaders
	Request shared.SendPipelineExecutionStepFailureRequest `request:"mediaType=application/json"`
}

type SendPipelineExecutionStepFailureResponse struct {
	ContentType                              string
	ResourceLimitExceeded                    *interface{}
	ResourceNotFound                         *interface{}
	SendPipelineExecutionStepFailureResponse *shared.SendPipelineExecutionStepFailureResponse
	StatusCode                               int64
}
