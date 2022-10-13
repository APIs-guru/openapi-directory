package operations

import (
	"openapi/pkg/models/shared"
)

type ListExecutionsStateEnum string

const (
	ListExecutionsStateEnumQueued     ListExecutionsStateEnum = "QUEUED"
	ListExecutionsStateEnumInProgress ListExecutionsStateEnum = "IN_PROGRESS"
	ListExecutionsStateEnumCanceled   ListExecutionsStateEnum = "CANCELED"
	ListExecutionsStateEnumFailed     ListExecutionsStateEnum = "FAILED"
	ListExecutionsStateEnumSucceeded  ListExecutionsStateEnum = "SUCCEEDED"
	ListExecutionsStateEnumRejected   ListExecutionsStateEnum = "REJECTED"
	ListExecutionsStateEnumTimedOut   ListExecutionsStateEnum = "TIMED_OUT"
)

type ListExecutionsQueryParams struct {
	MaxResults *int64                   `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string                  `queryParam:"style=form,explode=true,name=nextToken"`
	State      *ListExecutionsStateEnum `queryParam:"style=form,explode=true,name=state"`
	TaskID     string                   `queryParam:"style=form,explode=true,name=taskId"`
}

type ListExecutionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListExecutionsRequest struct {
	QueryParams ListExecutionsQueryParams
	Headers     ListExecutionsHeaders
}

type ListExecutionsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListExecutionsOutput      *shared.ListExecutionsOutput
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
