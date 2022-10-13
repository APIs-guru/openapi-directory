package operations

type GetEnableSnapshotCopyActionEnum string

const (
	GetEnableSnapshotCopyActionEnumEnableSnapshotCopy GetEnableSnapshotCopyActionEnum = "EnableSnapshotCopy"
)

type GetEnableSnapshotCopyVersionEnum string

const (
	GetEnableSnapshotCopyVersionEnumTwoThousandAndTwelve1201 GetEnableSnapshotCopyVersionEnum = "2012-12-01"
)

type GetEnableSnapshotCopyQueryParams struct {
	Action                        GetEnableSnapshotCopyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier             string                           `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DestinationRegion             string                           `queryParam:"style=form,explode=true,name=DestinationRegion"`
	ManualSnapshotRetentionPeriod *int64                           `queryParam:"style=form,explode=true,name=ManualSnapshotRetentionPeriod"`
	RetentionPeriod               *int64                           `queryParam:"style=form,explode=true,name=RetentionPeriod"`
	SnapshotCopyGrantName         *string                          `queryParam:"style=form,explode=true,name=SnapshotCopyGrantName"`
	Version                       GetEnableSnapshotCopyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetEnableSnapshotCopyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetEnableSnapshotCopyRequest struct {
	QueryParams GetEnableSnapshotCopyQueryParams
	Headers     GetEnableSnapshotCopyHeaders
}

type GetEnableSnapshotCopyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
