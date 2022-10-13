package operations

type GetRevokeSnapshotAccessActionEnum string

const (
	GetRevokeSnapshotAccessActionEnumRevokeSnapshotAccess GetRevokeSnapshotAccessActionEnum = "RevokeSnapshotAccess"
)

type GetRevokeSnapshotAccessVersionEnum string

const (
	GetRevokeSnapshotAccessVersionEnumTwoThousandAndTwelve1201 GetRevokeSnapshotAccessVersionEnum = "2012-12-01"
)

type GetRevokeSnapshotAccessQueryParams struct {
	AccountWithRestoreAccess  string                             `queryParam:"style=form,explode=true,name=AccountWithRestoreAccess"`
	Action                    GetRevokeSnapshotAccessActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	SnapshotClusterIdentifier *string                            `queryParam:"style=form,explode=true,name=SnapshotClusterIdentifier"`
	SnapshotIdentifier        string                             `queryParam:"style=form,explode=true,name=SnapshotIdentifier"`
	Version                   GetRevokeSnapshotAccessVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetRevokeSnapshotAccessHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRevokeSnapshotAccessRequest struct {
	QueryParams GetRevokeSnapshotAccessQueryParams
	Headers     GetRevokeSnapshotAccessHeaders
}

type GetRevokeSnapshotAccessResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
