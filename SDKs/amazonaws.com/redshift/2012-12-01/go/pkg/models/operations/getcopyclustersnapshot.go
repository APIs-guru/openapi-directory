package operations

type GetCopyClusterSnapshotActionEnum string

const (
	GetCopyClusterSnapshotActionEnumCopyClusterSnapshot GetCopyClusterSnapshotActionEnum = "CopyClusterSnapshot"
)

type GetCopyClusterSnapshotVersionEnum string

const (
	GetCopyClusterSnapshotVersionEnumTwoThousandAndTwelve1201 GetCopyClusterSnapshotVersionEnum = "2012-12-01"
)

type GetCopyClusterSnapshotQueryParams struct {
	Action                          GetCopyClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ManualSnapshotRetentionPeriod   *int64                            `queryParam:"style=form,explode=true,name=ManualSnapshotRetentionPeriod"`
	SourceSnapshotClusterIdentifier *string                           `queryParam:"style=form,explode=true,name=SourceSnapshotClusterIdentifier"`
	SourceSnapshotIdentifier        string                            `queryParam:"style=form,explode=true,name=SourceSnapshotIdentifier"`
	TargetSnapshotIdentifier        string                            `queryParam:"style=form,explode=true,name=TargetSnapshotIdentifier"`
	Version                         GetCopyClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCopyClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCopyClusterSnapshotRequest struct {
	QueryParams GetCopyClusterSnapshotQueryParams
	Headers     GetCopyClusterSnapshotHeaders
}

type GetCopyClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
