package operations

type PostDescribeDbSnapshotAttributesActionEnum string

const (
	PostDescribeDbSnapshotAttributesActionEnumDescribeDbSnapshotAttributes PostDescribeDbSnapshotAttributesActionEnum = "DescribeDBSnapshotAttributes"
)

type PostDescribeDbSnapshotAttributesVersionEnum string

const (
	PostDescribeDbSnapshotAttributesVersionEnumTwoThousandAndFourteen1031 PostDescribeDbSnapshotAttributesVersionEnum = "2014-10-31"
)

type PostDescribeDbSnapshotAttributesQueryParams struct {
	Action  PostDescribeDbSnapshotAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDbSnapshotAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbSnapshotAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbSnapshotAttributesRequest struct {
	QueryParams PostDescribeDbSnapshotAttributesQueryParams
	Headers     PostDescribeDbSnapshotAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbSnapshotAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
