package operations

type GetRebootClusterActionEnum string

const (
	GetRebootClusterActionEnumRebootCluster GetRebootClusterActionEnum = "RebootCluster"
)

type GetRebootClusterVersionEnum string

const (
	GetRebootClusterVersionEnumTwoThousandAndTwelve1201 GetRebootClusterVersionEnum = "2012-12-01"
)

type GetRebootClusterQueryParams struct {
	Action            GetRebootClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetRebootClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRebootClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRebootClusterRequest struct {
	QueryParams GetRebootClusterQueryParams
	Headers     GetRebootClusterHeaders
}

type GetRebootClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
