package operations

type GetUntagQueuePathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetUntagQueueActionEnum string

const (
	GetUntagQueueActionEnumUntagQueue GetUntagQueueActionEnum = "UntagQueue"
)

type GetUntagQueueVersionEnum string

const (
	GetUntagQueueVersionEnumTwoThousandAndTwelve1105 GetUntagQueueVersionEnum = "2012-11-05"
)

type GetUntagQueueQueryParams struct {
	Action  GetUntagQueueActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	TagKeys []string                 `queryParam:"style=form,explode=true,name=TagKeys"`
	Version GetUntagQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetUntagQueueHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetUntagQueueRequest struct {
	PathParams  GetUntagQueuePathParams
	QueryParams GetUntagQueueQueryParams
	Headers     GetUntagQueueHeaders
}

type GetUntagQueueResponse struct {
	ContentType string
	StatusCode  int64
}
