package operations

import (
	"time"
)

type GetDescribeEventsActionEnum string

const (
	GetDescribeEventsActionEnumDescribeEvents GetDescribeEventsActionEnum = "DescribeEvents"
)

type GetDescribeEventsSourceTypeEnum string

const (
	GetDescribeEventsSourceTypeEnumDbInstance       GetDescribeEventsSourceTypeEnum = "db-instance"
	GetDescribeEventsSourceTypeEnumDbParameterGroup GetDescribeEventsSourceTypeEnum = "db-parameter-group"
	GetDescribeEventsSourceTypeEnumDbSecurityGroup  GetDescribeEventsSourceTypeEnum = "db-security-group"
	GetDescribeEventsSourceTypeEnumDbSnapshot       GetDescribeEventsSourceTypeEnum = "db-snapshot"
)

type GetDescribeEventsVersionEnum string

const (
	GetDescribeEventsVersionEnumTwoThousandAndThirteen0110 GetDescribeEventsVersionEnum = "2013-01-10"
)

type GetDescribeEventsQueryParams struct {
	Action           GetDescribeEventsActionEnum      `queryParam:"style=form,explode=true,name=Action"`
	Duration         *int64                           `queryParam:"style=form,explode=true,name=Duration"`
	EndTime          *time.Time                       `queryParam:"style=form,explode=true,name=EndTime"`
	EventCategories  []string                         `queryParam:"style=form,explode=true,name=EventCategories"`
	Marker           *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords       *int64                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	SourceIdentifier *string                          `queryParam:"style=form,explode=true,name=SourceIdentifier"`
	SourceType       *GetDescribeEventsSourceTypeEnum `queryParam:"style=form,explode=true,name=SourceType"`
	StartTime        *time.Time                       `queryParam:"style=form,explode=true,name=StartTime"`
	Version          GetDescribeEventsVersionEnum     `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEventsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeEventsRequest struct {
	QueryParams GetDescribeEventsQueryParams
	Headers     GetDescribeEventsHeaders
}

type GetDescribeEventsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
