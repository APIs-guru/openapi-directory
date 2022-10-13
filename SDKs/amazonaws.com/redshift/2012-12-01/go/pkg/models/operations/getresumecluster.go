package operations

type GetResumeClusterActionEnum string

const (
	GetResumeClusterActionEnumResumeCluster GetResumeClusterActionEnum = "ResumeCluster"
)

type GetResumeClusterVersionEnum string

const (
	GetResumeClusterVersionEnumTwoThousandAndTwelve1201 GetResumeClusterVersionEnum = "2012-12-01"
)

type GetResumeClusterQueryParams struct {
	Action            GetResumeClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetResumeClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetResumeClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetResumeClusterRequest struct {
	QueryParams GetResumeClusterQueryParams
	Headers     GetResumeClusterHeaders
}

type GetResumeClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
