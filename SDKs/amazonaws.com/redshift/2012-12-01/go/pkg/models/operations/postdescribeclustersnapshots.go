package operations

type PostDescribeClusterSnapshotsActionEnum string

const (
	PostDescribeClusterSnapshotsActionEnumDescribeClusterSnapshots PostDescribeClusterSnapshotsActionEnum = "DescribeClusterSnapshots"
)

type PostDescribeClusterSnapshotsVersionEnum string

const (
	PostDescribeClusterSnapshotsVersionEnumTwoThousandAndTwelve1201 PostDescribeClusterSnapshotsVersionEnum = "2012-12-01"
)

type PostDescribeClusterSnapshotsQueryParams struct {
	Action     PostDescribeClusterSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                 `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                 `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeClusterSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClusterSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClusterSnapshotsRequest struct {
	QueryParams PostDescribeClusterSnapshotsQueryParams
	Headers     PostDescribeClusterSnapshotsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClusterSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
