package operations

type PostEnableSnapshotCopyActionEnum string

const (
	PostEnableSnapshotCopyActionEnumEnableSnapshotCopy PostEnableSnapshotCopyActionEnum = "EnableSnapshotCopy"
)

type PostEnableSnapshotCopyVersionEnum string

const (
	PostEnableSnapshotCopyVersionEnumTwoThousandAndTwelve1201 PostEnableSnapshotCopyVersionEnum = "2012-12-01"
)

type PostEnableSnapshotCopyQueryParams struct {
	Action  PostEnableSnapshotCopyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostEnableSnapshotCopyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostEnableSnapshotCopyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostEnableSnapshotCopyRequest struct {
	QueryParams PostEnableSnapshotCopyQueryParams
	Headers     PostEnableSnapshotCopyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostEnableSnapshotCopyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
