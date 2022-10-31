package operations

type PostCreateClusterSnapshotActionEnum string

const (
	PostCreateClusterSnapshotActionEnumCreateClusterSnapshot PostCreateClusterSnapshotActionEnum = "CreateClusterSnapshot"
)

type PostCreateClusterSnapshotVersionEnum string

const (
	PostCreateClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostCreateClusterSnapshotVersionEnum = "2012-12-01"
)

type PostCreateClusterSnapshotQueryParams struct {
	Action  PostCreateClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateClusterSnapshotRequest struct {
	QueryParams PostCreateClusterSnapshotQueryParams
	Headers     PostCreateClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
