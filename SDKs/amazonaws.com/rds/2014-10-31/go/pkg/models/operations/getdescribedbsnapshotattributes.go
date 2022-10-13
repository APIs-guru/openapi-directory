package operations

type GetDescribeDbSnapshotAttributesActionEnum string

const (
	GetDescribeDbSnapshotAttributesActionEnumDescribeDbSnapshotAttributes GetDescribeDbSnapshotAttributesActionEnum = "DescribeDBSnapshotAttributes"
)

type GetDescribeDbSnapshotAttributesVersionEnum string

const (
	GetDescribeDbSnapshotAttributesVersionEnumTwoThousandAndFourteen1031 GetDescribeDbSnapshotAttributesVersionEnum = "2014-10-31"
)

type GetDescribeDbSnapshotAttributesQueryParams struct {
	Action               GetDescribeDbSnapshotAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbSnapshotIdentifier string                                     `queryParam:"style=form,explode=true,name=DBSnapshotIdentifier"`
	Version              GetDescribeDbSnapshotAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbSnapshotAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeDbSnapshotAttributesRequest struct {
	QueryParams GetDescribeDbSnapshotAttributesQueryParams
	Headers     GetDescribeDbSnapshotAttributesHeaders
}

type GetDescribeDbSnapshotAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
