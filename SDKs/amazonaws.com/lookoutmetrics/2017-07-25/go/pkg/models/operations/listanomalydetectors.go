package operations

import (
	"openapi/pkg/models/shared"
)

type ListAnomalyDetectorsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListAnomalyDetectorsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type ListAnomalyDetectorsRequestBody struct {
	MaxResults *int64  `json:"MaxResults,omitempty"`
	NextToken  *string `json:"NextToken,omitempty"`
}

type ListAnomalyDetectorsRequest struct {
	QueryParams ListAnomalyDetectorsQueryParams
	Headers     ListAnomalyDetectorsHeaders
	Request     ListAnomalyDetectorsRequestBody `request:"mediaType=application/json"`
}

type ListAnomalyDetectorsResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	InternalServerException      *interface{}
	ListAnomalyDetectorsResponse *shared.ListAnomalyDetectorsResponse
	ResourceNotFoundException    *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
	ValidationException          *interface{}
}
