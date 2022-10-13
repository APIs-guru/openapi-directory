package operations

type PostPauseClusterActionEnum string

const (
	PostPauseClusterActionEnumPauseCluster PostPauseClusterActionEnum = "PauseCluster"
)

type PostPauseClusterVersionEnum string

const (
	PostPauseClusterVersionEnumTwoThousandAndTwelve1201 PostPauseClusterVersionEnum = "2012-12-01"
)

type PostPauseClusterQueryParams struct {
	Action  PostPauseClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostPauseClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostPauseClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostPauseClusterRequest struct {
	QueryParams PostPauseClusterQueryParams
	Headers     PostPauseClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostPauseClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
