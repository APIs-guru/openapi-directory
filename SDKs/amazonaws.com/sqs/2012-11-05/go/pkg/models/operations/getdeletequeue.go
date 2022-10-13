package operations

type GetDeleteQueuePathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetDeleteQueueActionEnum string

const (
	GetDeleteQueueActionEnumDeleteQueue GetDeleteQueueActionEnum = "DeleteQueue"
)

type GetDeleteQueueVersionEnum string

const (
	GetDeleteQueueVersionEnumTwoThousandAndTwelve1105 GetDeleteQueueVersionEnum = "2012-11-05"
)

type GetDeleteQueueQueryParams struct {
	Action  GetDeleteQueueActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version GetDeleteQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteQueueHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteQueueRequest struct {
	PathParams  GetDeleteQueuePathParams
	QueryParams GetDeleteQueueQueryParams
	Headers     GetDeleteQueueHeaders
}

type GetDeleteQueueResponse struct {
	ContentType string
	StatusCode  int64
}
