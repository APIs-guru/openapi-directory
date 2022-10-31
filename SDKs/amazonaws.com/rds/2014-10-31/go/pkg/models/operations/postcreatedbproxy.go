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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
