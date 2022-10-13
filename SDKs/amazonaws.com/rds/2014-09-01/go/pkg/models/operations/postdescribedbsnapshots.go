package operations

type PostDescribeDbSnapshotsActionEnum string

const (
	PostDescribeDbSnapshotsActionEnumDescribeDbSnapshots PostDescribeDbSnapshotsActionEnum = "DescribeDBSnapshots"
)

type PostDescribeDbSnapshotsVersionEnum string

const (
	PostDescribeDbSnapshotsVersionEnumTwoThousandAndFourteen0901 PostDescribeDbSnapshotsVersionEnum = "2014-09-01"
)

type PostDescribeDbSnapshotsQueryParams struct {
	Action  PostDescribeDbSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDbSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbSnapshotsRequest struct {
	QueryParams PostDescribeDbSnapshotsQueryParams
	Headers     PostDescribeDbSnapshotsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
