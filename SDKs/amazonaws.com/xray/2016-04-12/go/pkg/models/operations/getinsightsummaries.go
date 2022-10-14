package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type GetInsightSummariesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetInsightSummariesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetInsightSummariesRequestBody struct {
	EndTime    time.Time                 `json:"EndTime"`
	GroupArn   *string                   `json:"GroupARN,omitempty"`
	GroupName  *string                   `json:"GroupName,omitempty"`
	MaxResults *int64                    `json:"MaxResults,omitempty"`
	NextToken  *string                   `json:"NextToken,omitempty"`
	StartTime  time.Time                 `json:"StartTime"`
	States     []shared.InsightStateEnum `json:"States,omitempty"`
}

type GetInsightSummariesRequest struct {
	QueryParams GetInsightSummariesQueryParams
	Headers     GetInsightSummariesHeaders
	Request     GetInsightSummariesRequestBody `request:"mediaType=application/json"`
}

type GetInsightSummariesResponse struct {
	ContentType               string
	GetInsightSummariesResult *shared.GetInsightSummariesResult
	InvalidRequestException   *interface{}
	StatusCode                int64
	ThrottledException        *interface{}
}
