package operations

type PostRestoreFromClusterSnapshotActionEnum string

const (
	PostRestoreFromClusterSnapshotActionEnumRestoreFromClusterSnapshot PostRestoreFromClusterSnapshotActionEnum = "RestoreFromClusterSnapshot"
)

type PostRestoreFromClusterSnapshotVersionEnum string

const (
	PostRestoreFromClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostRestoreFromClusterSnapshotVersionEnum = "2012-12-01"
)

type PostRestoreFromClusterSnapshotQueryParams struct {
	Action  PostRestoreFromClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreFromClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreFromClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRestoreFromClusterSnapshotRequest struct {
	QueryParams PostRestoreFromClusterSnapshotQueryParams
	Headers     PostRestoreFromClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestoreFromClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
