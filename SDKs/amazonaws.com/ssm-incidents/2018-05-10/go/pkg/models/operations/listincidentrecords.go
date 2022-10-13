package operations

import (
	"openapi/pkg/models/shared"
)

type ListIncidentRecordsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListIncidentRecordsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListIncidentRecordsRequestBody struct {
	Filters    []shared.Filter `json:"filters"`
	MaxResults *int64          `json:"maxResults"`
	NextToken  *string         `json:"nextToken"`
}

type ListIncidentRecordsRequest struct {
	QueryParams ListIncidentRecordsQueryParams
	Headers     ListIncidentRecordsHeaders
	Request     ListIncidentRecordsRequestBody `request:"mediaType=application/json"`
}

type ListIncidentRecordsResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	InternalServerException   *interface{}
	ListIncidentRecordsOutput *shared.ListIncidentRecordsOutput
	StatusCode                int64
	ThrottlingException       *interface{}
	ValidationException       *interface{}
}
