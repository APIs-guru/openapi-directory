package operations

type GetDescribeSnapshotCopyGrantsActionEnum string

const (
	GetDescribeSnapshotCopyGrantsActionEnumDescribeSnapshotCopyGrants GetDescribeSnapshotCopyGrantsActionEnum = "DescribeSnapshotCopyGrants"
)

type GetDescribeSnapshotCopyGrantsVersionEnum string

const (
	GetDescribeSnapshotCopyGrantsVersionEnumTwoThousandAndTwelve1201 GetDescribeSnapshotCopyGrantsVersionEnum = "2012-12-01"
)

type GetDescribeSnapshotCopyGrantsQueryParams struct {
	Action                GetDescribeSnapshotCopyGrantsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker                *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords            *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	SnapshotCopyGrantName *string                                  `queryParam:"style=form,explode=true,name=SnapshotCopyGrantName"`
	TagKeys               []string                                 `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues             []string                                 `queryParam:"style=form,explode=true,name=TagValues"`
	Version               GetDescribeSnapshotCopyGrantsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeSnapshotCopyGrantsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeSnapshotCopyGrantsRequest struct {
	QueryParams GetDescribeSnapshotCopyGrantsQueryParams
	Headers     GetDescribeSnapshotCopyGrantsHeaders
}

type GetDescribeSnapshotCopyGrantsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
