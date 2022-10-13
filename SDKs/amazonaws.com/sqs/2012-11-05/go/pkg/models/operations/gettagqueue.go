package operations

type GetTagQueuePathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetTagQueueActionEnum string

const (
	GetTagQueueActionEnumTagQueue GetTagQueueActionEnum = "TagQueue"
)

type GetTagQueueVersionEnum string

const (
	GetTagQueueVersionEnumTwoThousandAndTwelve1105 GetTagQueueVersionEnum = "2012-11-05"
)

type GetTagQueueQueryParams struct {
	Action  GetTagQueueActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Tags    map[string]string      `queryParam:"style=form,explode=true,name=Tags"`
	Version GetTagQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetTagQueueHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetTagQueueRequest struct {
	PathParams  GetTagQueuePathParams
	QueryParams GetTagQueueQueryParams
	Headers     GetTagQueueHeaders
}

type GetTagQueueResponse struct {
	ContentType string
	StatusCode  int64
}
