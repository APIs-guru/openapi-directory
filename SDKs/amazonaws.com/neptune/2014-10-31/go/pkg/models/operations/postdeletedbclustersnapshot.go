package operations

type PostDeleteDbClusterSnapshotActionEnum string

const (
	PostDeleteDbClusterSnapshotActionEnumDeleteDbClusterSnapshot PostDeleteDbClusterSnapshotActionEnum = "DeleteDBClusterSnapshot"
)

type PostDeleteDbClusterSnapshotVersionEnum string

const (
	PostDeleteDbClusterSnapshotVersionEnumTwoThousandAndFourteen1031 PostDeleteDbClusterSnapshotVersionEnum = "2014-10-31"
)

type PostDeleteDbClusterSnapshotQueryParams struct {
	Action  PostDeleteDbClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDeleteDbClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDeleteDbClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDeleteDbClusterSnapshotRequest struct {
	QueryParams PostDeleteDbClusterSnapshotQueryParams
	Headers     PostDeleteDbClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDeleteDbClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
