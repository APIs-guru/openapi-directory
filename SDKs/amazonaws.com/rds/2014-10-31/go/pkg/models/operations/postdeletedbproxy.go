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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
