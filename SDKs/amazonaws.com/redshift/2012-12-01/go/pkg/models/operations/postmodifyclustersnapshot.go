package operations

type PostModifyClusterSnapshotActionEnum string

const (
	PostModifyClusterSnapshotActionEnumModifyClusterSnapshot PostModifyClusterSnapshotActionEnum = "ModifyClusterSnapshot"
)

type PostModifyClusterSnapshotVersionEnum string

const (
	PostModifyClusterSnapshotVersionEnumTwoThousandAndTwelve1201 PostModifyClusterSnapshotVersionEnum = "2012-12-01"
)

type PostModifyClusterSnapshotQueryParams struct {
	Action  PostModifyClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyClusterSnapshotRequest struct {
	QueryParams PostModifyClusterSnapshotQueryParams
	Headers     PostModifyClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
