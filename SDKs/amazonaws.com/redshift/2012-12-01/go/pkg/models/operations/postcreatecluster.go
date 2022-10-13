package operations

type PostCreateClusterActionEnum string

const (
	PostCreateClusterActionEnumCreateCluster PostCreateClusterActionEnum = "CreateCluster"
)

type PostCreateClusterVersionEnum string

const (
	PostCreateClusterVersionEnumTwoThousandAndTwelve1201 PostCreateClusterVersionEnum = "2012-12-01"
)

type PostCreateClusterQueryParams struct {
	Action  PostCreateClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateClusterRequest struct {
	QueryParams PostCreateClusterQueryParams
	Headers     PostCreateClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
