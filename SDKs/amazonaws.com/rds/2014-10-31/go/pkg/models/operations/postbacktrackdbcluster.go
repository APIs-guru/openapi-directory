package operations

type PostBacktrackDbClusterActionEnum string

const (
	PostBacktrackDbClusterActionEnumBacktrackDbCluster PostBacktrackDbClusterActionEnum = "BacktrackDBCluster"
)

type PostBacktrackDbClusterVersionEnum string

const (
	PostBacktrackDbClusterVersionEnumTwoThousandAndFourteen1031 PostBacktrackDbClusterVersionEnum = "2014-10-31"
)

type PostBacktrackDbClusterQueryParams struct {
	Action  PostBacktrackDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBacktrackDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBacktrackDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostBacktrackDbClusterRequest struct {
	QueryParams PostBacktrackDbClusterQueryParams
	Headers     PostBacktrackDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBacktrackDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
