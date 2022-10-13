package operations

type PostGetInsightRuleReportActionEnum string

const (
	PostGetInsightRuleReportActionEnumGetInsightRuleReport PostGetInsightRuleReportActionEnum = "GetInsightRuleReport"
)

type PostGetInsightRuleReportVersionEnum string

const (
	PostGetInsightRuleReportVersionEnumTwoThousandAndTen0801 PostGetInsightRuleReportVersionEnum = "2010-08-01"
)

type PostGetInsightRuleReportQueryParams struct {
	Action  PostGetInsightRuleReportActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostGetInsightRuleReportVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostGetInsightRuleReportHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostGetInsightRuleReportRequest struct {
	QueryParams PostGetInsightRuleReportQueryParams
	Headers     PostGetInsightRuleReportHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostGetInsightRuleReportResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
