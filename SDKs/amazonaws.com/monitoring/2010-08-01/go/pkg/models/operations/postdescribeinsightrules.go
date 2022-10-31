package operations

type PostDescribeInsightRulesActionEnum string

const (
	PostDescribeInsightRulesActionEnumDescribeInsightRules PostDescribeInsightRulesActionEnum = "DescribeInsightRules"
)

type PostDescribeInsightRulesVersionEnum string

const (
	PostDescribeInsightRulesVersionEnumTwoThousandAndTen0801 PostDescribeInsightRulesVersionEnum = "2010-08-01"
)

type PostDescribeInsightRulesQueryParams struct {
	Action     PostDescribeInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	MaxResults *string                             `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string                             `queryParam:"style=form,explode=true,name=NextToken"`
	Version    PostDescribeInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeInsightRulesRequest struct {
	QueryParams PostDescribeInsightRulesQueryParams
	Headers     PostDescribeInsightRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
