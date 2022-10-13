package operations

type PostCreateDbSnapshotActionEnum string

const (
	PostCreateDbSnapshotActionEnumCreateDbSnapshot PostCreateDbSnapshotActionEnum = "CreateDBSnapshot"
)

type PostCreateDbSnapshotVersionEnum string

const (
	PostCreateDbSnapshotVersionEnumTwoThousandAndThirteen0110 PostCreateDbSnapshotVersionEnum = "2013-01-10"
)

type PostCreateDbSnapshotQueryParams struct {
	Action  PostCreateDbSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateDbSnapshotRequest struct {
	QueryParams PostCreateDbSnapshotQueryParams
	Headers     PostCreateDbSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
