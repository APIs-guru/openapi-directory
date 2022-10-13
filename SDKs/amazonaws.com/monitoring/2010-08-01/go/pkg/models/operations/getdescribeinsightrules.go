package operations

type GetDescribeInsightRulesActionEnum string

const (
	GetDescribeInsightRulesActionEnumDescribeInsightRules GetDescribeInsightRulesActionEnum = "DescribeInsightRules"
)

type GetDescribeInsightRulesVersionEnum string

const (
	GetDescribeInsightRulesVersionEnumTwoThousandAndTen0801 GetDescribeInsightRulesVersionEnum = "2010-08-01"
)

type GetDescribeInsightRulesQueryParams struct {
	Action     GetDescribeInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *int64                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                            `queryParam:"style=form,explode=true,name=NextToken"`
	Version    GetDescribeInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeInsightRulesRequest struct {
	QueryParams GetDescribeInsightRulesQueryParams
	Headers     GetDescribeInsightRulesHeaders
}

type GetDescribeInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
