package operations

import (
	"openapi/pkg/models/shared"
)

type GetExecutionHistoryQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type GetExecutionHistoryXAmzTargetEnum string

const (
	GetExecutionHistoryXAmzTargetEnumAwsStepFunctionsGetExecutionHistory GetExecutionHistoryXAmzTargetEnum = "AWSStepFunctions.GetExecutionHistory"
)

type GetExecutionHistoryHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetExecutionHistoryXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetExecutionHistoryRequest struct {
	QueryParams GetExecutionHistoryQueryParams
	Headers     GetExecutionHistoryHeaders
	Request     shared.GetExecutionHistoryInput `request:"mediaType=application/json"`
}

type GetExecutionHistoryResponse struct {
	ContentType               string
	ExecutionDoesNotExist     *interface{}
	GetExecutionHistoryOutput *shared.GetExecutionHistoryOutput
	InvalidArn                *interface{}
	InvalidToken              *interface{}
	StatusCode                int64
}
