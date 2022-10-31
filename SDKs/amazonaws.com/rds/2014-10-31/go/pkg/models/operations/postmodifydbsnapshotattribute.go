package operations

type PostModifyDbSnapshotAttributeActionEnum string

const (
	PostModifyDbSnapshotAttributeActionEnumModifyDbSnapshotAttribute PostModifyDbSnapshotAttributeActionEnum = "ModifyDBSnapshotAttribute"
)

type PostModifyDbSnapshotAttributeVersionEnum string

const (
	PostModifyDbSnapshotAttributeVersionEnumTwoThousandAndFourteen1031 PostModifyDbSnapshotAttributeVersionEnum = "2014-10-31"
)

type PostModifyDbSnapshotAttributeQueryParams struct {
	Action  PostModifyDbSnapshotAttributeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostModifyDbSnapshotAttributeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostModifyDbSnapshotAttributeHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostModifyDbSnapshotAttributeRequest struct {
	QueryParams PostModifyDbSnapshotAttributeQueryParams
	Headers     PostModifyDbSnapshotAttributeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostModifyDbSnapshotAttributeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
