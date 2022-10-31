package operations

type PostUntagQueueActionEnum string

const (
	PostUntagQueueActionEnumUntagQueue PostUntagQueueActionEnum = "UntagQueue"
)

type PostUntagQueueVersionEnum string

const (
	PostUntagQueueVersionEnumTwoThousandAndTwelve1105 PostUntagQueueVersionEnum = "2012-11-05"
)

type PostUntagQueueQueryParams struct {
	Action  PostUntagQueueActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostUntagQueueVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostUntagQueueHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostUntagQueueRequest struct {
	QueryParams PostUntagQueueQueryParams
	Headers     PostUntagQueueHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostUntagQueueResponse struct {
	ContentType string
	StatusCode  int64
}
