package operations

type GetCreateDbSnapshotActionEnum string

const (
	GetCreateDbSnapshotActionEnumCreateDbSnapshot GetCreateDbSnapshotActionEnum = "CreateDBSnapshot"
)

type GetCreateDbSnapshotVersionEnum string

const (
	GetCreateDbSnapshotVersionEnumTwoThousandAndThirteen0212 GetCreateDbSnapshotVersionEnum = "2013-02-12"
)

type GetCreateDbSnapshotQueryParams struct {
	Action               GetCreateDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbInstanceIdentifier string                         `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
	DbSnapshotIdentifier string                         `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	Version              GetCreateDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCreateDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetCreateDbSnapshotRequest struct {
	QueryParams GetCreateDbSnapshotQueryParams
	Headers     GetCreateDbSnapshotHeaders
}

type GetCreateDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
