package operations

type PostFailoverGlobalClusterActionEnum string

const (
	PostFailoverGlobalClusterActionEnumFailoverGlobalCluster PostFailoverGlobalClusterActionEnum = "FailoverGlobalCluster"
)

type PostFailoverGlobalClusterVersionEnum string

const (
	PostFailoverGlobalClusterVersionEnumTwoThousandAndFourteen1031 PostFailoverGlobalClusterVersionEnum = "2014-10-31"
)

type PostFailoverGlobalClusterQueryParams struct {
	Action  PostFailoverGlobalClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostFailoverGlobalClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostFailoverGlobalClusterHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostFailoverGlobalClusterRequest struct {
	QueryParams PostFailoverGlobalClusterQueryParams
	Headers     PostFailoverGlobalClusterHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostFailoverGlobalClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
