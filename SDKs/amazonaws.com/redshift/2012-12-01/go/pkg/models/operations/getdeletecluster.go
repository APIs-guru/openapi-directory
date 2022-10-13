package operations

type GetDeleteClusterActionEnum string

const (
	GetDeleteClusterActionEnumDeleteCluster GetDeleteClusterActionEnum = "DeleteCluster"
)

type GetDeleteClusterVersionEnum string

const (
	GetDeleteClusterVersionEnumTwoThousandAndTwelve1201 GetDeleteClusterVersionEnum = "2012-12-01"
)

type GetDeleteClusterQueryParams struct {
	Action                              GetDeleteClusterActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier                   string                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	FinalClusterSnapshotIdentifier      *string                     `queryParam:"style=form,explode=true,name=FinalClusterSnapshotIdentifier"`
	FinalClusterSnapshotRetentionPeriod *int64                      `queryParam:"style=form,explode=true,name=FinalClusterSnapshotRetentionPeriod"`
	SkipFinalClusterSnapshot            *bool                       `queryParam:"style=form,explode=true,name=SkipFinalClusterSnapshot"`
	Version                             GetDeleteClusterVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClusterHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteClusterRequest struct {
	QueryParams GetDeleteClusterQueryParams
	Headers     GetDeleteClusterHeaders
}

type GetDeleteClusterResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
