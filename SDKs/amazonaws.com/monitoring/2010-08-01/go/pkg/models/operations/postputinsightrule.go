package operations

type PostPutInsightRuleActionEnum string

const (
	PostPutInsightRuleActionEnumPutInsightRule PostPutInsightRuleActionEnum = "PutInsightRule"
)

type PostPutInsightRuleVersionEnum string

const (
	PostPutInsightRuleVersionEnumTwoThousandAndTen0801 PostPutInsightRuleVersionEnum = "2010-08-01"
)

type PostPutInsightRuleQueryParams struct {
	Action  PostPutInsightRuleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPutInsightRuleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPutInsightRuleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostPutInsightRuleRequest struct {
	QueryParams PostPutInsightRuleQueryParams
	Headers     PostPutInsightRuleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPutInsightRuleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
