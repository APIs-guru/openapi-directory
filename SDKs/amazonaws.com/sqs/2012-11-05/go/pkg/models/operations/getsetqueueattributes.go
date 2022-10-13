package operations

type GetSetQueueAttributesPathParams struct {
	AccountNumber int64  `pathParam:"style=simple,explode=false,name=AccountNumber"`
	QueueName     string `pathParam:"style=simple,explode=false,name=QueueName"`
}

type GetSetQueueAttributesActionEnum string

const (
	GetSetQueueAttributesActionEnumSetQueueAttributes GetSetQueueAttributesActionEnum = "SetQueueAttributes"
)

type GetSetQueueAttributesVersionEnum string

const (
	GetSetQueueAttributesVersionEnumTwoThousandAndTwelve1105 GetSetQueueAttributesVersionEnum = "2012-11-05"
)

type GetSetQueueAttributesQueryParams struct {
	Action    GetSetQueueAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Attribute map[string]string                `queryParam:"style=form,explode=true,name=Attribute"`
	Version   GetSetQueueAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetSetQueueAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSetQueueAttributesRequest struct {
	PathParams  GetSetQueueAttributesPathParams
	QueryParams GetSetQueueAttributesQueryParams
	Headers     GetSetQueueAttributesHeaders
}

type GetSetQueueAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
