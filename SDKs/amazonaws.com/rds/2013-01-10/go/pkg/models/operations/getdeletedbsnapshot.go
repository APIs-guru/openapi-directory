package operations

type GetDeleteDbSnapshotActionEnum string

const (
	GetDeleteDbSnapshotActionEnumDeleteDbSnapshot GetDeleteDbSnapshotActionEnum = "DeleteDBSnapshot"
)

type GetDeleteDbSnapshotVersionEnum string

const (
	GetDeleteDbSnapshotVersionEnumTwoThousandAndThirteen0110 GetDeleteDbSnapshotVersionEnum = "2013-01-10"
)

type GetDeleteDbSnapshotQueryParams struct {
	Action               GetDeleteDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSnapshotIdentifier string                         `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	Version              GetDeleteDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbSnapshotRequest struct {
	QueryParams GetDeleteDbSnapshotQueryParams
	Headers     GetDeleteDbSnapshotHeaders
}

type GetDeleteDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
