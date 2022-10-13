package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInsightPathParams struct {
	InsightArn string `pathParam:"style=simple,explode=false,name=InsightArn"`
}

type DeleteInsightHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type DeleteInsightRequest struct {
	PathParams DeleteInsightPathParams
	Headers    DeleteInsightHeaders
}

type DeleteInsightResponse struct {
	ContentType               string
	DeleteInsightResponse     *shared.DeleteInsightResponse
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
}
