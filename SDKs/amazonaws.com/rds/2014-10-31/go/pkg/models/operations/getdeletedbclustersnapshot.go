package operations

type GetDeleteDbClusterSnapshotActionEnum string

const (
	GetDeleteDbClusterSnapshotActionEnumDeleteDbClusterSnapshot GetDeleteDbClusterSnapshotActionEnum = "DeleteDBClusterSnapshot"
)

type GetDeleteDbClusterSnapshotVersionEnum string

const (
	GetDeleteDbClusterSnapshotVersionEnumTwoThousandAndFourteen1031 GetDeleteDbClusterSnapshotVersionEnum = "2014-10-31"
)

type GetDeleteDbClusterSnapshotQueryParams struct {
	Action                      GetDeleteDbClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterSnapshotIdentifier string                                `queryParam:"style=form,explode=true,name=DBClusterSnapshotIdentifier"`
	Version                     GetDeleteDbClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDeleteDbClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDeleteDbClusterSnapshotRequest struct {
	QueryParams GetDeleteDbClusterSnapshotQueryParams
	Headers     GetDeleteDbClusterSnapshotHeaders
}

type GetDeleteDbClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
