package operations

type GetEnableInsightRulesActionEnum string

const (
	GetEnableInsightRulesActionEnumEnableInsightRules GetEnableInsightRulesActionEnum = "EnableInsightRules"
)

type GetEnableInsightRulesVersionEnum string

const (
	GetEnableInsightRulesVersionEnumTwoThousandAndTen0801 GetEnableInsightRulesVersionEnum = "2010-08-01"
)

type GetEnableInsightRulesQueryParams struct {
	Action    GetEnableInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleNames []string                         `queryParam:"style=form,explode=true,name=RuleNames"`
	Version   GetEnableInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetEnableInsightRulesRequest struct {
	QueryParams GetEnableInsightRulesQueryParams
	Headers     GetEnableInsightRulesHeaders
}

type GetEnableInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
