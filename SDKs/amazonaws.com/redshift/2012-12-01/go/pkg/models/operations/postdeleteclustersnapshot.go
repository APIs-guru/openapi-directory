package operations

type PostDeleteClusterSnapshotActionEnum string

const (
	PostDeleteClusterSnapshotActionEnumDeleteClusterSnapshot PostDeleteClusterSnapshotActionEnum = "DeleteClusterSnapshot"
)

type PostDeleteClusterSnapshotVersionEnum string

const (
	PostDeleteClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostDeleteClusterSnapshotVersionEnum = "2012-12-01"
)

type PostDeleteClusterSnapshotQueryParams struct {
	Action  PostDeleteClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteClusterSnapshotRequest struct {
	QueryParams PostDeleteClusterSnapshotQueryParams
	Headers     PostDeleteClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
