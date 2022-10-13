package operations

type PostDeleteDbSnapshotActionEnum string

const (
	PostDeleteDbSnapshotActionEnumDeleteDbSnapshot PostDeleteDbSnapshotActionEnum = "DeleteDBSnapshot"
)

type PostDeleteDbSnapshotVersionEnum string

const (
	PostDeleteDbSnapshotVersionEnumTwoThousandAndThirteen0110 PostDeleteDbSnapshotVersionEnum = "2013-01-10"
)

type PostDeleteDbSnapshotQueryParams struct {
	Action  PostDeleteDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbSnapshotRequest struct {
	QueryParams PostDeleteDbSnapshotQueryParams
	Headers     PostDeleteDbSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
