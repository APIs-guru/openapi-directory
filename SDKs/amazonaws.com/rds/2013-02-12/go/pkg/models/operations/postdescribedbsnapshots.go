package operations

type PostDescribeDbSnapshotsActionEnum string

const (
	PostDescribeDbSnapshotsActionEnumDescribeDbSnapshots PostDescribeDbSnapshotsActionEnum = "DescribeDBSnapshots"
)

type PostDescribeDbSnapshotsVersionEnum string

const (
	PostDescribeDbSnapshotsVersionEnumTwoThousandAndThirteen0212 PostDescribeDbSnapshotsVersionEnum = "2013-02-12"
)

type PostDescribeDbSnapshotsQueryParams struct {
	Action     PostDescribeDbSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                            `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                            `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
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
