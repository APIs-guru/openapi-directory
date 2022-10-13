package operations

type PostDeleteDbProxyActionEnum string

const (
	PostDeleteDbProxyActionEnumDeleteDbProxy PostDeleteDbProxyActionEnum = "DeleteDBProxy"
)

type PostDeleteDbProxyVersionEnum string

const (
	PostDeleteDbProxyVersionEnumTwoThousandAndFourteen1031 PostDeleteDbProxyVersionEnum = "2014-10-31"
)

type PostDeleteDbProxyQueryParams struct {
	Action  PostDeleteDbProxyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbProxyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbProxyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbProxyRequest struct {
	QueryParams PostDeleteDbProxyQueryParams
	Headers     PostDeleteDbProxyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbProxyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
