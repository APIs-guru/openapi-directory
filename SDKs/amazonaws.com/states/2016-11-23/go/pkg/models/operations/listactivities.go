package operations

import (
	"openapi/pkg/models/shared"
)

type ListActivitiesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListActivitiesXAmzTargetEnum string

const (
	ListActivitiesXAmzTargetEnumAwsStepFunctionsListActivities ListActivitiesXAmzTargetEnum = "AWSStepFunctions.ListActivities"
)

type ListActivitiesHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListActivitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListActivitiesRequest struct {
	QueryParams ListActivitiesQueryParams
	Headers     ListActivitiesHeaders
	Request     shared.ListActivitiesInput `request:"mediaType=application/json"`
}

type ListActivitiesResponse struct {
	ContentType          string
	InvalidToken         *interface{}
	ListActivitiesOutput *shared.ListActivitiesOutput
	StatusCode           int64
}
