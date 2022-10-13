package operations

type GetModifyDbSnapshotActionEnum string

const (
	GetModifyDbSnapshotActionEnumModifyDbSnapshot GetModifyDbSnapshotActionEnum = "ModifyDBSnapshot"
)

type GetModifyDbSnapshotVersionEnum string

const (
	GetModifyDbSnapshotVersionEnumTwoThousandAndFourteen1031 GetModifyDbSnapshotVersionEnum = "2014-10-31"
)

type GetModifyDbSnapshotQueryParams struct {
	Action               GetModifyDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSnapshotIdentifier string                         `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	EngineVersion        *string                        `queryParam:"style=form,explode=true,name=EngineVersion"`
	OptionGroupName      *string                        `queryParam:"style=form,explode=true,name=OptionGroupName"`
	Version              GetModifyDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetModifyDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetModifyDbSnapshotRequest struct {
	QueryParams GetModifyDbSnapshotQueryParams
	Headers     GetModifyDbSnapshotHeaders
}

type GetModifyDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
