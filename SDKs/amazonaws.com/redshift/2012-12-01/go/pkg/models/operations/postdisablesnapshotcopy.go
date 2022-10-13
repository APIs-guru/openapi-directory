package operations

type PostDisableSnapshotCopyActionEnum string

const (
	PostDisableSnapshotCopyActionEnumDisableSnapshotCopy PostDisableSnapshotCopyActionEnum = "DisableSnapshotCopy"
)

type PostDisableSnapshotCopyVersionEnum string

const (
	PostDisableSnapshotCopyVersionEnumTwoThousandAndTwelve1201 PostDisableSnapshotCopyVersionEnum = "2012-12-01"
)

type PostDisableSnapshotCopyQueryParams struct {
	Action  PostDisableSnapshotCopyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDisableSnapshotCopyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDisableSnapshotCopyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDisableSnapshotCopyRequest struct {
	QueryParams PostDisableSnapshotCopyQueryParams
	Headers     PostDisableSnapshotCopyHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDisableSnapshotCopyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
