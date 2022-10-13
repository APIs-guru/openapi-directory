package operations

type GetChangeMessageVisibilityPathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetChangeMessageVisibilityActionEnum string

const (
	GetChangeMessageVisibilityActionEnumChangeMessageVisibility GetChangeMessageVisibilityActionEnum = "ChangeMessageVisibility"
)

type GetChangeMessageVisibilityVersionEnum string

const (
	GetChangeMessageVisibilityVersionEnumTwoThousandAndTwelve1105 GetChangeMessageVisibilityVersionEnum = "2012-11-05"
)

type GetChangeMessageVisibilityQueryParams struct {
	Action            GetChangeMessageVisibilityActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ReceiptHandle     string                                `queryParam:"style=form,explode=true,name=ReceiptHandle"`
	Version           GetChangeMessageVisibilityVersionEnum `queryParam:"style=form,explode=true,name=Version"`
	VisibilityTimeout int64                                 `queryParam:"style=form,explode=true,name=VisibilityTimeout"`
}

type GetChangeMessageVisibilityHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetChangeMessageVisibilityRequest struct {
	PathParams  GetChangeMessageVisibilityPathParams
	QueryParams GetChangeMessageVisibilityQueryParams
	Headers     GetChangeMessageVisibilityHeaders
}

type GetChangeMessageVisibilityResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
