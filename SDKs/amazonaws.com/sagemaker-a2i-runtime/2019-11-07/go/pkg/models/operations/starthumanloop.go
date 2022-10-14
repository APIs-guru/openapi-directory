package operations

import (
	"openapi/pkg/models/shared"
)

type StartHumanLoopHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type StartHumanLoopRequestBodyDataAttributes struct {
	ContentClassifiers []shared.ContentClassifierEnum `json:"ContentClassifiers,omitempty"`
}

type StartHumanLoopRequestBodyHumanLoopInput struct {
	InputContent *string `json:"InputContent,omitempty"`
}

type StartHumanLoopRequestBody struct {
	DataAttributes    *StartHumanLoopRequestBodyDataAttributes `json:"DataAttributes,omitempty"`
	FlowDefinitionArn string                                   `json:"FlowDefinitionArn"`
	HumanLoopInput    StartHumanLoopRequestBodyHumanLoopInput  `json:"HumanLoopInput"`
	HumanLoopName     string                                   `json:"HumanLoopName"`
}

type StartHumanLoopRequest struct {
	Headers StartHumanLoopHeaders
	Request StartHumanLoopRequestBody `request:"mediaType=application/json"`
}

type StartHumanLoopResponse struct {
	ConflictException             *interface{}
	ContentType                   string
	InternalServerException       *interface{}
	ServiceQuotaExceededException *interface{}
	StartHumanLoopResponse        *shared.StartHumanLoopResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
