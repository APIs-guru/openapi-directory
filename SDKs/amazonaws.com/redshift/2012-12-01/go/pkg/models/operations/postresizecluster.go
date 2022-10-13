package operations

type PostResizeClusterActionEnum string

const (
	PostResizeClusterActionEnumResizeCluster PostResizeClusterActionEnum = "ResizeCluster"
)

type PostResizeClusterVersionEnum string

const (
	PostResizeClusterVersionEnumTwoThousandAndTwelve1201 PostResizeClusterVersionEnum = "2012-12-01"
)

type PostResizeClusterQueryParams struct {
	Action  PostResizeClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostResizeClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostResizeClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostResizeClusterRequest struct {
	QueryParams PostResizeClusterQueryParams
	Headers     PostResizeClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostResizeClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
