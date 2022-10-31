package operations

type PostEnableInsightRulesActionEnum string

const (
	PostEnableInsightRulesActionEnumEnableInsightRules PostEnableInsightRulesActionEnum = "EnableInsightRules"
)

type PostEnableInsightRulesVersionEnum string

const (
	PostEnableInsightRulesVersionEnumTwoThousandAndTen0801 PostEnableInsightRulesVersionEnum = "2010-08-01"
)

type PostEnableInsightRulesQueryParams struct {
	Action  PostEnableInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostEnableInsightRulesRequest struct {
	QueryParams PostEnableInsightRulesQueryParams
	Headers     PostEnableInsightRulesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
