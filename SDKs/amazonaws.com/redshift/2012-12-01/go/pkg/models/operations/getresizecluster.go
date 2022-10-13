package operations

type GetResizeClusterActionEnum string

const (
	GetResizeClusterActionEnumResizeCluster GetResizeClusterActionEnum = "ResizeCluster"
)

type GetResizeClusterVersionEnum string

const (
	GetResizeClusterVersionEnumTwoThousandAndTwelve1201 GetResizeClusterVersionEnum = "2012-12-01"
)

type GetResizeClusterQueryParams struct {
	Action            GetResizeClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Classic           *bool                       `queryParam:"style=form,explode=true,name=Classic"`
	ClusterIdentifier string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	ClusterType       *string                     `queryParam:"style=form,explode=true,name=ClusterType"`
	NodeType          *string                     `queryParam:"style=form,explode=true,name=NodeType"`
	NumberOfNodes     *int64                      `queryParam:"style=form,explode=true,name=NumberOfNodes"`
	Version           GetResizeClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResizeClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResizeClusterRequest struct {
	QueryParams GetResizeClusterQueryParams
	Headers     GetResizeClusterHeaders
}

type GetResizeClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
