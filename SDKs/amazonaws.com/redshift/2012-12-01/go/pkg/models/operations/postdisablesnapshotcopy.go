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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
