package operations

type GetModifyClusterSnapshotScheduleActionEnum string

const (
	GetModifyClusterSnapshotScheduleActionEnumModifyClusterSnapshotSchedule GetModifyClusterSnapshotScheduleActionEnum = "ModifyClusterSnapshotSchedule"
)

type GetModifyClusterSnapshotScheduleVersionEnum string

const (
	GetModifyClusterSnapshotScheduleVersionEnumTwoThousandAndTwelve1201 GetModifyClusterSnapshotScheduleVersionEnum = "2012-12-01"
)

type GetModifyClusterSnapshotScheduleQueryParams struct {
	Action               GetModifyClusterSnapshotScheduleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier    string                                      `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	DisassociateSchedule *bool                                       `queryParam:"style=form,explode=true,name=DisassociateSchedule"`
	ScheduleIdentifier   *string                                     `queryParam:"style=form,explode=true,name=ScheduleIdentifier"`
	Version              GetModifyClusterSnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyClusterSnapshotScheduleHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetModifyClusterSnapshotScheduleRequest struct {
	QueryParams GetModifyClusterSnapshotScheduleQueryParams
	Headers     GetModifyClusterSnapshotScheduleHeaders
}

type GetModifyClusterSnapshotScheduleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
