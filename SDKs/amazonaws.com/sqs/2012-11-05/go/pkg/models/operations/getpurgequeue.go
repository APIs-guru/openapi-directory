package operations

type GetPurgeQueuePathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetPurgeQueueActionEnum string

const (
	GetPurgeQueueActionEnumPurgeQueue GetPurgeQueueActionEnum = "PurgeQueue"
)

type GetPurgeQueueVersionEnum string

const (
	GetPurgeQueueVersionEnumTwoThousandAndTwelve1105 GetPurgeQueueVersionEnum = "2012-11-05"
)

type GetPurgeQueueQueryParams struct {
	Action  GetPurgeQueueActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetPurgeQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetPurgeQueueHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetPurgeQueueRequest struct {
	PathParams  GetPurgeQueuePathParams
	QueryParams GetPurgeQueueQueryParams
	Headers     GetPurgeQueueHeaders
}

type GetPurgeQueueResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
