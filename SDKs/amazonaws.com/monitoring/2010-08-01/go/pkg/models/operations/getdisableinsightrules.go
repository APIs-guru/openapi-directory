package operations

type GetDisableInsightRulesActionEnum string

const (
	GetDisableInsightRulesActionEnumDisableInsightRules GetDisableInsightRulesActionEnum = "DisableInsightRules"
)

type GetDisableInsightRulesVersionEnum string

const (
	GetDisableInsightRulesVersionEnumTwoThousandAndTen0801 GetDisableInsightRulesVersionEnum = "2010-08-01"
)

type GetDisableInsightRulesQueryParams struct {
	Action    GetDisableInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleNames []string                          `queryParam:"style=form,explode=true,name=RuleNames"`
	Version   GetDisableInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDisableInsightRulesRequest struct {
	QueryParams GetDisableInsightRulesQueryParams
	Headers     GetDisableInsightRulesHeaders
}

type GetDisableInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
