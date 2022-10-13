package operations

type PostDeleteClusterActionEnum string

const (
	PostDeleteClusterActionEnumDeleteCluster PostDeleteClusterActionEnum = "DeleteCluster"
)

type PostDeleteClusterVersionEnum string

const (
	PostDeleteClusterVersionEnumTwoThousandAndTwelve1201 PostDeleteClusterVersionEnum = "2012-12-01"
)

type PostDeleteClusterQueryParams struct {
	Action  PostDeleteClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteClusterRequest struct {
	QueryParams PostDeleteClusterQueryParams
	Headers     PostDeleteClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
