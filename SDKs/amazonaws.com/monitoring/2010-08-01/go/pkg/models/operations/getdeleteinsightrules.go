package operations

type GetDeleteInsightRulesActionEnum string

const (
	GetDeleteInsightRulesActionEnumDeleteInsightRules GetDeleteInsightRulesActionEnum = "DeleteInsightRules"
)

type GetDeleteInsightRulesVersionEnum string

const (
	GetDeleteInsightRulesVersionEnumTwoThousandAndTen0801 GetDeleteInsightRulesVersionEnum = "2010-08-01"
)

type GetDeleteInsightRulesQueryParams struct {
	Action    GetDeleteInsightRulesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	RuleNames []string                         `queryParam:"style=form,explode=true,name=RuleNames"`
	Version   GetDeleteInsightRulesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteInsightRulesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteInsightRulesRequest struct {
	QueryParams GetDeleteInsightRulesQueryParams
	Headers     GetDeleteInsightRulesHeaders
}

type GetDeleteInsightRulesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
