package operations

import (
	"openapi/pkg/models/shared"
)

type ListAlertsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAlertsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListAlertsRequestBody struct {
	AnomalyDetectorArn *string `json:"AnomalyDetectorArn,omitempty"`
	MaxResults         *int64  `json:"MaxResults,omitempty"`
	NextToken          *string `json:"NextToken,omitempty"`
}

type ListAlertsRequest struct {
	QueryParams ListAlertsQueryParams
	Headers     ListAlertsHeaders
	Request     ListAlertsRequestBody `request:"mediaType=application/json"`
}

type ListAlertsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListAlertsResponse        *shared.ListAlertsResponse
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	ValidationException       *interface{}
}
