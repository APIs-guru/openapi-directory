package operations

type GetDeleteMessagePathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetDeleteMessageActionEnum string

const (
	GetDeleteMessageActionEnumDeleteMessage GetDeleteMessageActionEnum = "DeleteMessage"
)

type GetDeleteMessageVersionEnum string

const (
	GetDeleteMessageVersionEnumTwoThousandAndTwelve1105 GetDeleteMessageVersionEnum = "2012-11-05"
)

type GetDeleteMessageQueryParams struct {
	Action        GetDeleteMessageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ReceiptHandle string                      `queryParam:"style=form,explode=true,name=ReceiptHandle"`
	Version       GetDeleteMessageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteMessageHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteMessageRequest struct {
	PathParams  GetDeleteMessagePathParams
	QueryParams GetDeleteMessageQueryParams
	Headers     GetDeleteMessageHeaders
}

type GetDeleteMessageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
