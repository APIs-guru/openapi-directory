package operations

type GetModifySnapshotCopyRetentionPeriodActionEnum string

const (
	GetModifySnapshotCopyRetentionPeriodActionEnumModifySnapshotCopyRetentionPeriod GetModifySnapshotCopyRetentionPeriodActionEnum = "ModifySnapshotCopyRetentionPeriod"
)

type GetModifySnapshotCopyRetentionPeriodVersionEnum string

const (
	GetModifySnapshotCopyRetentionPeriodVersionEnumTwoThousandAndTwelve1201 GetModifySnapshotCopyRetentionPeriodVersionEnum = "2012-12-01"
)

type GetModifySnapshotCopyRetentionPeriodQueryParams struct {
	Action            GetModifySnapshotCopyRetentionPeriodActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                                          `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Manual            *bool                                           `queryParam:"style=form,explode=true,name=Manual"`
	RetentionPeriod   int64                                           `queryParam:"style=form,explode=true,name=RetentionPeriod"`
	Version           GetModifySnapshotCopyRetentionPeriodVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifySnapshotCopyRetentionPeriodHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifySnapshotCopyRetentionPeriodRequest struct {
	QueryParams GetModifySnapshotCopyRetentionPeriodQueryParams
	Headers     GetModifySnapshotCopyRetentionPeriodHeaders
}

type GetModifySnapshotCopyRetentionPeriodResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
