package operations

type PostCreateSnapshotCopyGrantActionEnum string

const (
	PostCreateSnapshotCopyGrantActionEnumCreateSnapshotCopyGrant PostCreateSnapshotCopyGrantActionEnum = "CreateSnapshotCopyGrant"
)

type PostCreateSnapshotCopyGrantVersionEnum string

const (
	PostCreateSnapshotCopyGrantVersionEnumTwoThousandAndTwelve1201 PostCreateSnapshotCopyGrantVersionEnum = "2012-12-01"
)

type PostCreateSnapshotCopyGrantQueryParams struct {
	Action  PostCreateSnapshotCopyGrantActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateSnapshotCopyGrantVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateSnapshotCopyGrantHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostCreateSnapshotCopyGrantRequest struct {
	QueryParams PostCreateSnapshotCopyGrantQueryParams
	Headers     PostCreateSnapshotCopyGrantHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateSnapshotCopyGrantResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
