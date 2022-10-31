package operations

type GetDescribeDbSnapshotsActionEnum string

const (
	GetDescribeDbSnapshotsActionEnumDescribeDbSnapshots GetDescribeDbSnapshotsActionEnum = "DescribeDBSnapshots"
)

type GetDescribeDbSnapshotsVersionEnum string

const (
	GetDescribeDbSnapshotsVersionEnumTwoThousandAndThirteen0110 GetDescribeDbSnapshotsVersionEnum = "2013-01-10"
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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
