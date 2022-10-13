package operations

type PostModifyDbSnapshotActionEnum string

const (
	PostModifyDbSnapshotActionEnumModifyDbSnapshot PostModifyDbSnapshotActionEnum = "ModifyDBSnapshot"
)

type PostModifyDbSnapshotVersionEnum string

const (
	PostModifyDbSnapshotVersionEnumTwoThousandAndFourteen1031 PostModifyDbSnapshotVersionEnum = "2014-10-31"
)

type PostModifyDbSnapshotQueryParams struct {
	Action  PostModifyDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyDbSnapshotRequest struct {
	QueryParams PostModifyDbSnapshotQueryParams
	Headers     PostModifyDbSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
