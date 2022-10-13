package operations

type PostRestoreDbInstanceFromDbSnapshotActionEnum string

const (
	PostRestoreDbInstanceFromDbSnapshotActionEnumRestoreDbInstanceFromDbSnapshot PostRestoreDbInstanceFromDbSnapshotActionEnum = "RestoreDBInstanceFromDBSnapshot"
)

type PostRestoreDbInstanceFromDbSnapshotVersionEnum string

const (
	PostRestoreDbInstanceFromDbSnapshotVersionEnumTwoThousandAndThirteen0110 PostRestoreDbInstanceFromDbSnapshotVersionEnum = "2013-01-10"
)

type PostRestoreDbInstanceFromDbSnapshotQueryParams struct {
	Action  PostRestoreDbInstanceFromDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRestoreDbInstanceFromDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRestoreDbInstanceFromDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRestoreDbInstanceFromDbSnapshotRequest struct {
	QueryParams PostRestoreDbInstanceFromDbSnapshotQueryParams
	Headers     PostRestoreDbInstanceFromDbSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRestoreDbInstanceFromDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
