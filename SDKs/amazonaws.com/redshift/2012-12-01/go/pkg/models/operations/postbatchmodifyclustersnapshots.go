package operations

type PostBatchModifyClusterSnapshotsActionEnum string

const (
	PostBatchModifyClusterSnapshotsActionEnumBatchModifyClusterSnapshots PostBatchModifyClusterSnapshotsActionEnum = "BatchModifyClusterSnapshots"
)

type PostBatchModifyClusterSnapshotsVersionEnum string

const (
	PostBatchModifyClusterSnapshotsVersionEnumTwoThousandAndTwelve1201 PostBatchModifyClusterSnapshotsVersionEnum = "2012-12-01"
)

type PostBatchModifyClusterSnapshotsQueryParams struct {
	Action  PostBatchModifyClusterSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostBatchModifyClusterSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostBatchModifyClusterSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostBatchModifyClusterSnapshotsRequest struct {
	QueryParams PostBatchModifyClusterSnapshotsQueryParams
	Headers     PostBatchModifyClusterSnapshotsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostBatchModifyClusterSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
