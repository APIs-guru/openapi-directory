package operations

type PostCreateDbProxyActionEnum string

const (
	PostCreateDbProxyActionEnumCreateDbProxy PostCreateDbProxyActionEnum = "CreateDBProxy"
)

type PostCreateDbProxyVersionEnum string

const (
	PostCreateDbProxyVersionEnumTwoThousandAndFourteen1031 PostCreateDbProxyVersionEnum = "2014-10-31"
)

type PostCreateDbProxyQueryParams struct {
	Action  PostCreateDbProxyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbProxyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbProxyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbProxyRequest struct {
	QueryParams PostCreateDbProxyQueryParams
	Headers     PostCreateDbProxyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbProxyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
