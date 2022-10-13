package operations

import (
	"openapi/pkg/models/shared"
)

type ListMetricSetsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListMetricSetsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListMetricSetsRequestBody struct {
	AnomalyDetectorArn *string `json:"AnomalyDetectorArn"`
	MaxResults         *int64  `json:"MaxResults"`
	NextToken          *string `json:"NextToken"`
}

type ListMetricSetsRequest struct {
	QueryParams ListMetricSetsQueryParams
	Headers     ListMetricSetsHeaders
	Request     ListMetricSetsRequestBody `request:"mediaType=application/json"`
}

type ListMetricSetsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListMetricSetsResponse    *shared.ListMetricSetsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	ValidationException       *interface{}
}
