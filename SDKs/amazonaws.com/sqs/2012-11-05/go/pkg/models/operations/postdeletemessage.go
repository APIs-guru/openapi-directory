package operations

type PostDeleteMessageActionEnum string

const (
	PostDeleteMessageActionEnumDeleteMessage PostDeleteMessageActionEnum = "DeleteMessage"
)

type PostDeleteMessageVersionEnum string

const (
	PostDeleteMessageVersionEnumTwoThousandAndTwelve1105 PostDeleteMessageVersionEnum = "2012-11-05"
)

type PostDeleteMessageQueryParams struct {
	Action  PostDeleteMessageActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteMessageVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteMessageHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteMessageRequest struct {
	QueryParams PostDeleteMessageQueryParams
	Headers     PostDeleteMessageHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteMessageResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
