package operations

type PostCreateDbClusterSnapshotActionEnum string

const (
	PostCreateDbClusterSnapshotActionEnumCreateDbClusterSnapshot PostCreateDbClusterSnapshotActionEnum = "CreateDBClusterSnapshot"
)

type PostCreateDbClusterSnapshotVersionEnum string

const (
	PostCreateDbClusterSnapshotVersionEnumTwoThousandAndFourteen1031 PostCreateDbClusterSnapshotVersionEnum = "2014-10-31"
)

type PostCreateDbClusterSnapshotQueryParams struct {
	Action  PostCreateDbClusterSnapshotActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostCreateDbClusterSnapshotVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostCreateDbClusterSnapshotHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostCreateDbClusterSnapshotRequest struct {
	QueryParams PostCreateDbClusterSnapshotQueryParams
	Headers     PostCreateDbClusterSnapshotHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostCreateDbClusterSnapshotResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
