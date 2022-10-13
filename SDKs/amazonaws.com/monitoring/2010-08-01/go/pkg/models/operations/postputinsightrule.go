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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
