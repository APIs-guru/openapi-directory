package operations

import (
	"time"
)

type GetGetInsightRuleReportActionEnum string

const (
	GetGetInsightRuleReportActionEnumGetInsightRuleReport GetGetInsightRuleReportActionEnum = "GetInsightRuleReport"
)

type GetGetInsightRuleReportVersionEnum string

const (
	GetGetInsightRuleReportVersionEnumTwoThousandAndTen0801 GetGetInsightRuleReportVersionEnum = "2010-08-01"
)

type GetGetInsightRuleReportQueryParams struct {
	Action              GetGetInsightRuleReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	EndTime             time.Time                          `queryParam:"style=form,explode=true,name=EndTime"`
	MaxContributorCount *int64                             `queryParam:"style=form,explode=true,name=MaxContributorCount"`
	Metrics             []string                           `queryParam:"style=form,explode=true,name=Metrics"`
	OrderBy             *string                            `queryParam:"style=form,explode=true,name=OrderBy"`
	Period              int64                              `queryParam:"style=form,explode=true,name=Period"`
	RuleName            string                             `queryParam:"style=form,explode=true,name=RuleName"`
	StartTime           time.Time                          `queryParam:"style=form,explode=true,name=StartTime"`
	Version             GetGetInsightRuleReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetInsightRuleReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetGetInsightRuleReportRequest struct {
	QueryParams GetGetInsightRuleReportQueryParams
	Headers     GetGetInsightRuleReportHeaders
}

type GetGetInsightRuleReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
