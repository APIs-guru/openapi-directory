package operations

import (
	"openapi/pkg/models/shared"
)

type PollForDecisionTaskQueryParams struct {
	MaximumPageSize *string `queryParam:"style=form,explode=true,name=maximumPageSize"`
	NextPageToken   *string `queryParam:"style=form,explode=true,name=nextPageToken"`
}

type PollForDecisionTaskXAmzTargetEnum string

const (
	PollForDecisionTaskXAmzTargetEnumSimpleWorkflowServicePollForDecisionTask PollForDecisionTaskXAmzTargetEnum = "SimpleWorkflowService.PollForDecisionTask"
)

type PollForDecisionTaskHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PollForDecisionTaskXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PollForDecisionTaskRequest struct {
	QueryParams PollForDecisionTaskQueryParams
	Headers     PollForDecisionTaskHeaders
	Request     shared.PollForDecisionTaskInput `request:"mediaType=application/json"`
}

type PollForDecisionTaskResponse struct {
	ContentType                string
	DecisionTask               *shared.DecisionTask
	LimitExceededFault         *interface{}
	OperationNotPermittedFault *interface{}
	StatusCode                 int64
	UnknownResourceFault       *interface{}
}
