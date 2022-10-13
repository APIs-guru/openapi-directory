package operations

type PostCopyDbSnapshotActionEnum string

const (
	PostCopyDbSnapshotActionEnumCopyDbSnapshot PostCopyDbSnapshotActionEnum = "CopyDBSnapshot"
)

type PostCopyDbSnapshotVersionEnum string

const (
	PostCopyDbSnapshotVersionEnumTwoThousandAndFourteen0901 PostCopyDbSnapshotVersionEnum = "2014-09-01"
)

type PostCopyDbSnapshotQueryParams struct {
	Action  PostCopyDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCopyDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCopyDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCopyDbSnapshotRequest struct {
	QueryParams PostCopyDbSnapshotQueryParams
	Headers     PostCopyDbSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCopyDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
