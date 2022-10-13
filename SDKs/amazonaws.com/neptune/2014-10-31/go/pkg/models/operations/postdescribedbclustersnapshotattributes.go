package operations

type PostDescribeDbClusterSnapshotAttributesActionEnum string

const (
	PostDescribeDbClusterSnapshotAttributesActionEnumDescribeDbClusterSnapshotAttributes PostDescribeDbClusterSnapshotAttributesActionEnum = "DescribeDBClusterSnapshotAttributes"
)

type PostDescribeDbClusterSnapshotAttributesVersionEnum string

const (
	PostDescribeDbClusterSnapshotAttributesVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClusterSnapshotAttributesVersionEnum = "2014-10-31"
)

type PostDescribeDbClusterSnapshotAttributesQueryParams struct {
	Action  PostDescribeDbClusterSnapshotAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDbClusterSnapshotAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbClusterSnapshotAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbClusterSnapshotAttributesRequest struct {
	QueryParams PostDescribeDbClusterSnapshotAttributesQueryParams
	Headers     PostDescribeDbClusterSnapshotAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbClusterSnapshotAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
