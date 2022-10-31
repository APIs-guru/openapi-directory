package operations

type PostDescribeSnapshotCopyGrantsActionEnum string

const (
	PostDescribeSnapshotCopyGrantsActionEnumDescribeSnapshotCopyGrants PostDescribeSnapshotCopyGrantsActionEnum = "DescribeSnapshotCopyGrants"
)

type PostDescribeSnapshotCopyGrantsVersionEnum string

const (
	PostDescribeSnapshotCopyGrantsVersionEnumTwoThousandAndTwelve1201 PostDescribeSnapshotCopyGrantsVersionEnum = "2012-12-01"
)

type PostDescribeSnapshotCopyGrantsQueryParams struct {
	Action     PostDescribeSnapshotCopyGrantsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeSnapshotCopyGrantsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSnapshotCopyGrantsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeSnapshotCopyGrantsRequest struct {
	QueryParams PostDescribeSnapshotCopyGrantsQueryParams
	Headers     PostDescribeSnapshotCopyGrantsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSnapshotCopyGrantsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
