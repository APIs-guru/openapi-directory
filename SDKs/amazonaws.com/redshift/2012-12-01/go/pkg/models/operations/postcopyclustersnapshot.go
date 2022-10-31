package operations

type PostCopyClusterSnapshotActionEnum string

const (
	PostCopyClusterSnapshotActionEnumCopyClusterSnapshot PostCopyClusterSnapshotActionEnum = "CopyClusterSnapshot"
)

type PostCopyClusterSnapshotVersionEnum string

const (
	PostCopyClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostCopyClusterSnapshotVersionEnum = "2012-12-01"
)

type PostCopyClusterSnapshotQueryParams struct {
	Action  PostCopyClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCopyClusterSnapshotRequest struct {
	QueryParams PostCopyClusterSnapshotQueryParams
	Headers     PostCopyClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
