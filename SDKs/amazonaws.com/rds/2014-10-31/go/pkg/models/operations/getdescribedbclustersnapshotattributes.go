package operations

type GetDescribeDbClusterSnapshotAttributesActionEnum string

const (
	GetDescribeDbClusterSnapshotAttributesActionEnumDescribeDbClusterSnapshotAttributes GetDescribeDbClusterSnapshotAttributesActionEnum = "DescribeDBClusterSnapshotAttributes"
)

type GetDescribeDbClusterSnapshotAttributesVersionEnum string

const (
	GetDescribeDbClusterSnapshotAttributesVersionEnumTwoThousandAndFourteen1031 GetDescribeDbClusterSnapshotAttributesVersionEnum = "2014-10-31"
)

type GetDescribeDbClusterSnapshotAttributesQueryParams struct {
	Action                      GetDescribeDbClusterSnapshotAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	DbClusterSnapshotIdentifier string                                            `queryParam:"style=form,explode=true,name=DBClusterSnapshotIdentifier"`
	Version                     GetDescribeDbClusterSnapshotAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeDbClusterSnapshotAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeDbClusterSnapshotAttributesRequest struct {
	QueryParams GetDescribeDbClusterSnapshotAttributesQueryParams
	Headers     GetDescribeDbClusterSnapshotAttributesHeaders
}

type GetDescribeDbClusterSnapshotAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
