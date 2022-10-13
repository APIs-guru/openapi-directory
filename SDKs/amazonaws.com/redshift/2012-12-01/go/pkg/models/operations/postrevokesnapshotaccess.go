package operations

type PostRevokeSnapshotAccessActionEnum string

const (
	PostRevokeSnapshotAccessActionEnumRevokeSnapshotAccess PostRevokeSnapshotAccessActionEnum = "RevokeSnapshotAccess"
)

type PostRevokeSnapshotAccessVersionEnum string

const (
	PostRevokeSnapshotAccessVersionEnumTwoThousandAndTwelve1201 PostRevokeSnapshotAccessVersionEnum = "2012-12-01"
)

type PostRevokeSnapshotAccessQueryParams struct {
	Action  PostRevokeSnapshotAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostRevokeSnapshotAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostRevokeSnapshotAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostRevokeSnapshotAccessRequest struct {
	QueryParams PostRevokeSnapshotAccessQueryParams
	Headers     PostRevokeSnapshotAccessHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostRevokeSnapshotAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
