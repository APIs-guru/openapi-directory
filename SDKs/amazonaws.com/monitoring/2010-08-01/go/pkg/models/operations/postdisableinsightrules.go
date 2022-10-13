package operations

type PostDisableInsightRulesActionEnum string

const (
	PostDisableInsightRulesActionEnumDisableInsightRules PostDisableInsightRulesActionEnum = "DisableInsightRules"
)

type PostDisableInsightRulesVersionEnum string

const (
	PostDisableInsightRulesVersionEnumTwoThousandAndTen0801 PostDisableInsightRulesVersionEnum = "2010-08-01"
)

type PostDisableInsightRulesQueryParams struct {
	Action  PostDisableInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableInsightRulesRequest struct {
	QueryParams PostDisableInsightRulesQueryParams
	Headers     PostDisableInsightRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
