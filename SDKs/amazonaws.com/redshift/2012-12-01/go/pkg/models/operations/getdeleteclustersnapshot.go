package operations

type GetDeleteClusterSnapshotActionEnum string

const (
	GetDeleteClusterSnapshotActionEnumDeleteClusterSnapshot GetDeleteClusterSnapshotActionEnum = "DeleteClusterSnapshot"
)

type GetDeleteClusterSnapshotVersionEnum string

const (
	GetDeleteClusterSnapshotVersionEnumTwoThousandAndTwelve1201 GetDeleteClusterSnapshotVersionEnum = "2012-12-01"
)

type GetDeleteClusterSnapshotQueryParams struct {
	Action                    GetDeleteClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SnapshotClusterIdentifier *string                             `queryParam:"style=form,explode=true,name=SnapshotClusterIdentifier"`
	SnapshotIdentifier        string                              `queryParam:"style=form,explode=true,name=SnapshotIdentifier"`
	Version                   GetDeleteClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDeleteClusterSnapshotRequest struct {
	QueryParams GetDeleteClusterSnapshotQueryParams
	Headers     GetDeleteClusterSnapshotHeaders
}

type GetDeleteClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
