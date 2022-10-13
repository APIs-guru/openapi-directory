package operations

type PostModifyDbClusterSnapshotAttributeActionEnum string

const (
	PostModifyDbClusterSnapshotAttributeActionEnumModifyDbClusterSnapshotAttribute PostModifyDbClusterSnapshotAttributeActionEnum = "ModifyDBClusterSnapshotAttribute"
)

type PostModifyDbClusterSnapshotAttributeVersionEnum string

const (
	PostModifyDbClusterSnapshotAttributeVersionEnumTwoThousandAndFourteen1031 PostModifyDbClusterSnapshotAttributeVersionEnum = "2014-10-31"
)

type PostModifyDbClusterSnapshotAttributeQueryParams struct {
	Action  PostModifyDbClusterSnapshotAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbClusterSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbClusterSnapshotAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostModifyDbClusterSnapshotAttributeRequest struct {
	QueryParams PostModifyDbClusterSnapshotAttributeQueryParams
	Headers     PostModifyDbClusterSnapshotAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbClusterSnapshotAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
