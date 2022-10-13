package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpeechSynthesisTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=TaskId"`
}

type GetSpeechSynthesisTaskHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSpeechSynthesisTaskRequest struct {
	PathParams GetSpeechSynthesisTaskPathParams
	Headers    GetSpeechSynthesisTaskHeaders
}

type GetSpeechSynthesisTaskResponse struct {
	ContentType                    string
	GetSpeechSynthesisTaskOutput   *shared.GetSpeechSynthesisTaskOutput
	InvalidTaskIDException         *interface{}
	ServiceFailureException        *interface{}
	StatusCode                     int64
	SynthesisTaskNotFoundException *interface{}
}
