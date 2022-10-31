package operations

type GetDeleteDbSnapshotActionEnum string

const (
	GetDeleteDbSnapshotActionEnumDeleteDbSnapshot GetDeleteDbSnapshotActionEnum = "DeleteDBSnapshot"
)

type GetDeleteDbSnapshotVersionEnum string

const (
	GetDeleteDbSnapshotVersionEnumTwoThousandAndFourteen1031 GetDeleteDbSnapshotVersionEnum = "2014-10-31"
)

type GetDeleteDbSnapshotQueryParams struct {
	Action               GetDeleteDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSnapshotIdentifier string                         `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	Version              GetDeleteDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
