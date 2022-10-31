package operations

type PostDeleteSnapshotCopyGrantActionEnum string

const (
	PostDeleteSnapshotCopyGrantActionEnumDeleteSnapshotCopyGrant PostDeleteSnapshotCopyGrantActionEnum = "DeleteSnapshotCopyGrant"
)

type PostDeleteSnapshotCopyGrantVersionEnum string

const (
	PostDeleteSnapshotCopyGrantVersionEnumTwoThousandAndTwelve1201 PostDeleteSnapshotCopyGrantVersionEnum = "2012-12-01"
)

type PostDeleteSnapshotCopyGrantQueryParams struct {
	Action  PostDeleteSnapshotCopyGrantActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteSnapshotCopyGrantVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteSnapshotCopyGrantHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDeleteSnapshotCopyGrantRequest struct {
	QueryParams PostDeleteSnapshotCopyGrantQueryParams
	Headers     PostDeleteSnapshotCopyGrantHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteSnapshotCopyGrantResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
