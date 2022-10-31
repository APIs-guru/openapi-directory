package operations

type PostDescribeDbClusterSnapshotsActionEnum string

const (
	PostDescribeDbClusterSnapshotsActionEnumDescribeDbClusterSnapshots PostDescribeDbClusterSnapshotsActionEnum = "DescribeDBClusterSnapshots"
)

type PostDescribeDbClusterSnapshotsVersionEnum string

const (
	PostDescribeDbClusterSnapshotsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClusterSnapshotsVersionEnum = "2014-10-31"
)

type PostDescribeDbClusterSnapshotsQueryParams struct {
	Action     PostDescribeDbClusterSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbClusterSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbClusterSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbClusterSnapshotsRequest struct {
	QueryParams PostDescribeDbClusterSnapshotsQueryParams
	Headers     PostDescribeDbClusterSnapshotsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbClusterSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
