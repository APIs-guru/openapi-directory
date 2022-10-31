package operations

type GetCreateQueueActionEnum string

const (
	GetCreateQueueActionEnumCreateQueue GetCreateQueueActionEnum = "CreateQueue"
)

type GetCreateQueueVersionEnum string

const (
	GetCreateQueueVersionEnumTwoThousandAndTwelve1105 GetCreateQueueVersionEnum = "2012-11-05"
)

type GetCreateQueueQueryParams struct {
	Action    GetCreateQueueActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Attribute map[string]string         `queryParam:"style=form,explode=true,name=Attribute"`
	QueueName string                    `queryParam:"style=form,explode=true,name=QueueName"`
	Tag       map[string]string         `queryParam:"style=form,explode=true,name=Tag"`
	Version   GetCreateQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateQueueHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCreateQueueRequest struct {
	QueryParams GetCreateQueueQueryParams
	Headers     GetCreateQueueHeaders
}

type GetCreateQueueResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
