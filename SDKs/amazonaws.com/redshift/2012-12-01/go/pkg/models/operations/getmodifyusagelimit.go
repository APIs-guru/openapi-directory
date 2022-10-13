package operations

type GetModifyUsageLimitActionEnum string

const (
	GetModifyUsageLimitActionEnumModifyUsageLimit GetModifyUsageLimitActionEnum = "ModifyUsageLimit"
)

type GetModifyUsageLimitBreachActionEnum string

const (
	GetModifyUsageLimitBreachActionEnumLog        GetModifyUsageLimitBreachActionEnum = "log"
	GetModifyUsageLimitBreachActionEnumEmitMetric GetModifyUsageLimitBreachActionEnum = "emit-metric"
	GetModifyUsageLimitBreachActionEnumDisable    GetModifyUsageLimitBreachActionEnum = "disable"
)

type GetModifyUsageLimitVersionEnum string

const (
	GetModifyUsageLimitVersionEnumTwoThousandAndTwelve1201 GetModifyUsageLimitVersionEnum = "2012-12-01"
)

type GetModifyUsageLimitQueryParams struct {
	Action       GetModifyUsageLimitActionEnum        `queryParam:"style=form,explode=true,name=Action"`
	Amount       *int64                               `queryParam:"style=form,explode=true,name=Amount"`
	BreachAction *GetModifyUsageLimitBreachActionEnum `queryParam:"style=form,explode=true,name=BreachAction"`
	UsageLimitID string                               `queryParam:"style=form,explode=true,name=UsageLimitId"`
	Version      GetModifyUsageLimitVersionEnum       `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyUsageLimitHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyUsageLimitRequest struct {
	QueryParams GetModifyUsageLimitQueryParams
	Headers     GetModifyUsageLimitHeaders
}

type GetModifyUsageLimitResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
