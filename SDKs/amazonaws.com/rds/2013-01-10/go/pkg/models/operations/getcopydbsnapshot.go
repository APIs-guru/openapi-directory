package operations

type GetCopyDbSnapshotActionEnum string

const (
	GetCopyDbSnapshotActionEnumCopyDbSnapshot GetCopyDbSnapshotActionEnum = "CopyDBSnapshot"
)

type GetCopyDbSnapshotVersionEnum string

const (
	GetCopyDbSnapshotVersionEnumTwoThousandAndThirteen0110 GetCopyDbSnapshotVersionEnum = "2013-01-10"
)

type GetCopyDbSnapshotQueryParams struct {
	Action                     GetCopyDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SourceDbSnapshotIdentifier string                       `queryParam:"style=form,explode=true,name=SourceDBSnapshotIdentifier"`
	TargetDbSnapshotIdentifier string                       `queryParam:"style=form,explode=true,name=TargetDBSnapshotIdentifier"`
	Version                    GetCopyDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetCopyDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetCopyDbSnapshotRequest struct {
	QueryParams GetCopyDbSnapshotQueryParams
	Headers     GetCopyDbSnapshotHeaders
}

type GetCopyDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
