package operations

import (
	"openapi/pkg/models/shared"
)

type GetSpeechSynthesisTaskPathParams struct {
	TaskID string `pathParam:"style=simple,explode=false,name=TaskId"`
}

type GetSpeechSynthesisTaskHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
