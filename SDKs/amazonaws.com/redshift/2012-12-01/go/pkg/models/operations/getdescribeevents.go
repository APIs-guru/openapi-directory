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
	GetDescribeEventsSourceTypeEnumCluster               GetDescribeEventsSourceTypeEnum = "cluster"
	GetDescribeEventsSourceTypeEnumClusterParameterGroup GetDescribeEventsSourceTypeEnum = "cluster-parameter-group"
	GetDescribeEventsSourceTypeEnumClusterSecurityGroup  GetDescribeEventsSourceTypeEnum = "cluster-security-group"
	GetDescribeEventsSourceTypeEnumClusterSnapshot       GetDescribeEventsSourceTypeEnum = "cluster-snapshot"
	GetDescribeEventsSourceTypeEnumScheduledAction       GetDescribeEventsSourceTypeEnum = "scheduled-action"
)

type GetDescribeEventsVersionEnum string

const (
	GetDescribeEventsVersionEnumTwoThousandAndTwelve1201 GetDescribeEventsVersionEnum = "2012-12-01"
)

type GetDescribeEventsQueryParams struct {
	Action           GetDescribeEventsActionEnum      `queryParam:"style=form,explode=true,name=Action"`
	Duration         *int64                           `queryParam:"style=form,explode=true,name=Duration"`
	EndTime          *time.Time                       `queryParam:"style=form,explode=true,name=EndTime"`
	Marker           *string                          `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords       *int64                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	SourceIdentifier *string                          `queryParam:"style=form,explode=true,name=SourceIdentifier"`
	SourceType       *GetDescribeEventsSourceTypeEnum `queryParam:"style=form,explode=true,name=SourceType"`
	StartTime        *time.Time                       `queryParam:"style=form,explode=true,name=StartTime"`
	Version          GetDescribeEventsVersionEnum     `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeEventsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
