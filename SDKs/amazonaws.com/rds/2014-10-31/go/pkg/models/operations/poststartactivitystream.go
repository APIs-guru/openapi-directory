package operations

type PostStartActivityStreamActionEnum string

const (
	PostStartActivityStreamActionEnumStartActivityStream PostStartActivityStreamActionEnum = "StartActivityStream"
)

type PostStartActivityStreamVersionEnum string

const (
	PostStartActivityStreamVersionEnumTwoThousandAndFourteen1031 PostStartActivityStreamVersionEnum = "2014-10-31"
)

type PostStartActivityStreamQueryParams struct {
	Action  PostStartActivityStreamActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStartActivityStreamVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStartActivityStreamHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostStartActivityStreamRequest struct {
	QueryParams PostStartActivityStreamQueryParams
	Headers     PostStartActivityStreamHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStartActivityStreamResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
