package operations

import (
	"openapi/pkg/models/shared"
)

type ListAnomalyGroupSummariesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAnomalyGroupSummariesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAnomalyGroupSummariesRequestBody struct {
	AnomalyDetectorArn   string  `json:"AnomalyDetectorArn"`
	MaxResults           *int64  `json:"MaxResults"`
	NextToken            *string `json:"NextToken"`
	SensitivityThreshold int64   `json:"SensitivityThreshold"`
}

type ListAnomalyGroupSummariesRequest struct {
	QueryParams ListAnomalyGroupSummariesQueryParams
	Headers     ListAnomalyGroupSummariesHeaders
	Request     ListAnomalyGroupSummariesRequestBody `request:"mediaType=application/json"`
}

type ListAnomalyGroupSummariesResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	InternalServerException           *interface{}
	ListAnomalyGroupSummariesResponse *shared.ListAnomalyGroupSummariesResponse
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	TooManyRequestsException          *interface{}
	ValidationException               *interface{}
}
