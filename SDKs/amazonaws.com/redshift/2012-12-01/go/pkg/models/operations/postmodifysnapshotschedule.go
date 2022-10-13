package operations

type PostModifySnapshotScheduleActionEnum string

const (
	PostModifySnapshotScheduleActionEnumModifySnapshotSchedule PostModifySnapshotScheduleActionEnum = "ModifySnapshotSchedule"
)

type PostModifySnapshotScheduleVersionEnum string

const (
	PostModifySnapshotScheduleVersionEnumTwoThousandAndTwelve1201 PostModifySnapshotScheduleVersionEnum = "2012-12-01"
)

type PostModifySnapshotScheduleQueryParams struct {
	Action  PostModifySnapshotScheduleActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifySnapshotScheduleVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifySnapshotScheduleHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifySnapshotScheduleRequest struct {
	QueryParams PostModifySnapshotScheduleQueryParams
	Headers     PostModifySnapshotScheduleHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifySnapshotScheduleResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
