package operations

type PostStopDbClusterActionEnum string

const (
	PostStopDbClusterActionEnumStopDbCluster PostStopDbClusterActionEnum = "StopDBCluster"
)

type PostStopDbClusterVersionEnum string

const (
	PostStopDbClusterVersionEnumTwoThousandAndFourteen1031 PostStopDbClusterVersionEnum = "2014-10-31"
)

type PostStopDbClusterQueryParams struct {
	Action  PostStopDbClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostStopDbClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostStopDbClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostStopDbClusterRequest struct {
	QueryParams PostStopDbClusterQueryParams
	Headers     PostStopDbClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostStopDbClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
