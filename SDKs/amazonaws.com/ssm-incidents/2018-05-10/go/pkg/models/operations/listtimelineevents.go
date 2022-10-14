package operations

import (
	"openapi/pkg/models/shared"
)

type ListTimelineEventsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=maxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=nextToken"`
}

type ListTimelineEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type ListTimelineEventsRequestBodySortByEnum string

const (
	ListTimelineEventsRequestBodySortByEnumEventTime ListTimelineEventsRequestBodySortByEnum = "EVENT_TIME"
)

type ListTimelineEventsRequestBodySortOrderEnum string

const (
	ListTimelineEventsRequestBodySortOrderEnumAscending  ListTimelineEventsRequestBodySortOrderEnum = "ASCENDING"
	ListTimelineEventsRequestBodySortOrderEnumDescending ListTimelineEventsRequestBodySortOrderEnum = "DESCENDING"
)

type ListTimelineEventsRequestBody struct {
	Filters           []shared.Filter                             `json:"filters,omitempty"`
	IncidentRecordArn string                                      `json:"incidentRecordArn"`
	MaxResults        *int64                                      `json:"maxResults,omitempty"`
	NextToken         *string                                     `json:"nextToken,omitempty"`
	SortBy            *ListTimelineEventsRequestBodySortByEnum    `json:"sortBy,omitempty"`
	SortOrder         *ListTimelineEventsRequestBodySortOrderEnum `json:"sortOrder,omitempty"`
}

type ListTimelineEventsRequest struct {
	QueryParams ListTimelineEventsQueryParams
	Headers     ListTimelineEventsHeaders
	Request     ListTimelineEventsRequestBody `request:"mediaType=application/json"`
}

type ListTimelineEventsResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	InternalServerException  *interface{}
	ListTimelineEventsOutput *shared.ListTimelineEventsOutput
	StatusCode               int64
	ThrottlingException      *interface{}
	ValidationException      *interface{}
}
