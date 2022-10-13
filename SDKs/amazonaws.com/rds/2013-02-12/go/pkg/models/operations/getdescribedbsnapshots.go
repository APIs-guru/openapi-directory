package operations

type GetDescribeDbSnapshotsActionEnum string

const (
	GetDescribeDbSnapshotsActionEnumDescribeDbSnapshots GetDescribeDbSnapshotsActionEnum = "DescribeDBSnapshots"
)

type GetDescribeDbSnapshotsVersionEnum string

const (
	GetDescribeDbSnapshotsVersionEnumTwoThousandAndThirteen0212 GetDescribeDbSnapshotsVersionEnum = "2013-02-12"
)

type GetDescribeDbSnapshotsQueryParams struct {
	Action               GetDescribeDbSnapshotsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier *string                           `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	DbSnapshotIdentifier *string                           `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	Marker               *string                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords           *int64                            `queryParam:"style=form,explode=true,name=MaxRecords"`
	SnapshotType         *string                           `queryParam:"style=form,explode=true,name=SnapshotType"`
	Version              GetDescribeDbSnapshotsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbSnapshotsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDbSnapshotsRequest struct {
	QueryParams GetDescribeDbSnapshotsQueryParams
	Headers     GetDescribeDbSnapshotsHeaders
}

type GetDescribeDbSnapshotsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
