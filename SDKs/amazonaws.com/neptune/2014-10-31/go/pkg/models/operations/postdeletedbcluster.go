package operations

type PostDeleteDbClusterActionEnum string

const (
	PostDeleteDbClusterActionEnumDeleteDbCluster PostDeleteDbClusterActionEnum = "DeleteDBCluster"
)

type PostDeleteDbClusterVersionEnum string

const (
	PostDeleteDbClusterVersionEnumTwoThousandAndFourteen1031 PostDeleteDbClusterVersionEnum = "2014-10-31"
)

type PostDeleteDbClusterQueryParams struct {
	Action  PostDeleteDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbClusterRequest struct {
	QueryParams PostDeleteDbClusterQueryParams
	Headers     PostDeleteDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
