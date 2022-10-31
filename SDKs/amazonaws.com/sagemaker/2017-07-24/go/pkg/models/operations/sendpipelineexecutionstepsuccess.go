package operations

import (
	"openapi/pkg/models/shared"
)

type SendPipelineExecutionStepSuccessXAmzTargetEnum string

const (
	SendPipelineExecutionStepSuccessXAmzTargetEnumSageMakerSendPipelineExecutionStepSuccess SendPipelineExecutionStepSuccessXAmzTargetEnum = "SageMaker.SendPipelineExecutionStepSuccess"
)

type SendPipelineExecutionStepSuccessHeaders struct {
	XAmzAlgorithm     *string                                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        SendPipelineExecutionStepSuccessXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type SendPipelineExecutionStepSuccessRequest struct {
	Headers SendPipelineExecutionStepSuccessHeaders
	Request shared.SendPipelineExecutionStepSuccessRequest `request:"mediaType=application/json"`
}

type SendPipelineExecutionStepSuccessResponse struct {
	ContentType                              string
	ResourceLimitExceeded                    *interface{}
	ResourceNotFound                         *interface{}
	SendPipelineExecutionStepSuccessResponse *shared.SendPipelineExecutionStepSuccessResponse
	StatusCode                               int64
}
