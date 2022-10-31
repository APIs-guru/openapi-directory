package operations

import (
	"openapi/pkg/models/shared"
)

type ListSpeechSynthesisTasksStatusEnum string

const (
	ListSpeechSynthesisTasksStatusEnumScheduled  ListSpeechSynthesisTasksStatusEnum = "scheduled"
	ListSpeechSynthesisTasksStatusEnumInProgress ListSpeechSynthesisTasksStatusEnum = "inProgress"
	ListSpeechSynthesisTasksStatusEnumCompleted  ListSpeechSynthesisTasksStatusEnum = "completed"
	ListSpeechSynthesisTasksStatusEnumFailed     ListSpeechSynthesisTasksStatusEnum = "failed"
)

type ListSpeechSynthesisTasksQueryParams struct {
	MaxResults *int64                              `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                             `queryParam:"style=form,explode=true,name=NextToken"`
	Status     *ListSpeechSynthesisTasksStatusEnum `queryParam:"style=form,explode=true,name=Status"`
}

type ListSpeechSynthesisTasksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListSpeechSynthesisTasksRequest struct {
	QueryParams ListSpeechSynthesisTasksQueryParams
	Headers     ListSpeechSynthesisTasksHeaders
}

type ListSpeechSynthesisTasksResponse struct {
	ContentType                    string
	InvalidNextTokenException      *interface{}
	ListSpeechSynthesisTasksOutput *shared.ListSpeechSynthesisTasksOutput
	ServiceFailureException        *interface{}
	StatusCode                     int64
}
