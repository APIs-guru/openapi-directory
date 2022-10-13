package operations

type GetModifySnapshotScheduleActionEnum string

const (
	GetModifySnapshotScheduleActionEnumModifySnapshotSchedule GetModifySnapshotScheduleActionEnum = "ModifySnapshotSchedule"
)

type GetModifySnapshotScheduleVersionEnum string

const (
	GetModifySnapshotScheduleVersionEnumTwoThousandAndTwelve1201 GetModifySnapshotScheduleVersionEnum = "2012-12-01"
)

type GetModifySnapshotScheduleQueryParams struct {
	Action              GetModifySnapshotScheduleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ScheduleDefinitions []string                             `queryParam:"style=form,explode=true,name=ScheduleDefinitions"`
	ScheduleIdentifier  string                               `queryParam:"style=form,explode=true,name=ScheduleIdentifier"`
	Version             GetModifySnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifySnapshotScheduleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifySnapshotScheduleRequest struct {
	QueryParams GetModifySnapshotScheduleQueryParams
	Headers     GetModifySnapshotScheduleHeaders
}

type GetModifySnapshotScheduleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
