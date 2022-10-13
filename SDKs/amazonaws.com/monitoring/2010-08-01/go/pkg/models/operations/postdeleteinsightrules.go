package operations

type PostDeleteInsightRulesActionEnum string

const (
	PostDeleteInsightRulesActionEnumDeleteInsightRules PostDeleteInsightRulesActionEnum = "DeleteInsightRules"
)

type PostDeleteInsightRulesVersionEnum string

const (
	PostDeleteInsightRulesVersionEnumTwoThousandAndTen0801 PostDeleteInsightRulesVersionEnum = "2010-08-01"
)

type PostDeleteInsightRulesQueryParams struct {
	Action  PostDeleteInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteInsightRulesRequest struct {
	QueryParams PostDeleteInsightRulesQueryParams
	Headers     PostDeleteInsightRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
