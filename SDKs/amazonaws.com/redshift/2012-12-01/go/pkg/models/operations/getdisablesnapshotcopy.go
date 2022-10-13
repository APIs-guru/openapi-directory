package operations

type GetDisableSnapshotCopyActionEnum string

const (
	GetDisableSnapshotCopyActionEnumDisableSnapshotCopy GetDisableSnapshotCopyActionEnum = "DisableSnapshotCopy"
)

type GetDisableSnapshotCopyVersionEnum string

const (
	GetDisableSnapshotCopyVersionEnumTwoThousandAndTwelve1201 GetDisableSnapshotCopyVersionEnum = "2012-12-01"
)

type GetDisableSnapshotCopyQueryParams struct {
	Action            GetDisableSnapshotCopyActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                            `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetDisableSnapshotCopyVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDisableSnapshotCopyHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDisableSnapshotCopyRequest struct {
	QueryParams GetDisableSnapshotCopyQueryParams
	Headers     GetDisableSnapshotCopyHeaders
}

type GetDisableSnapshotCopyResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
