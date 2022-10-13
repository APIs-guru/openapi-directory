package operations

import (
	"openapi/pkg/models/shared"
)

type ListExecutionsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListExecutionsXAmzTargetEnum string

const (
	ListExecutionsXAmzTargetEnumAwsStepFunctionsListExecutions ListExecutionsXAmzTargetEnum = "AWSStepFunctions.ListExecutions"
)

type ListExecutionsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListExecutionsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListExecutionsRequest struct {
	QueryParams ListExecutionsQueryParams
	Headers     ListExecutionsHeaders
	Request     shared.ListExecutionsInput `request:"mediaType=application/json"`
}

type ListExecutionsResponse struct {
	ContentType                  string
	InvalidArn                   *interface{}
	InvalidToken                 *interface{}
	ListExecutionsOutput         *shared.ListExecutionsOutput
	StateMachineDoesNotExist     *interface{}
	StateMachineTypeNotSupported *interface{}
	StatusCode                   int64
}
