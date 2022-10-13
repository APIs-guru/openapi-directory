package operations

type GetDescribeClusterDbRevisionsActionEnum string

const (
	GetDescribeClusterDbRevisionsActionEnumDescribeClusterDbRevisions GetDescribeClusterDbRevisionsActionEnum = "DescribeClusterDbRevisions"
)

type GetDescribeClusterDbRevisionsVersionEnum string

const (
	GetDescribeClusterDbRevisionsVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterDbRevisionsVersionEnum = "2012-12-01"
)

type GetDescribeClusterDbRevisionsQueryParams struct {
	Action            GetDescribeClusterDbRevisionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier *string                                  `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Marker            *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords        *int64                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version           GetDescribeClusterDbRevisionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterDbRevisionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterDbRevisionsRequest struct {
	QueryParams GetDescribeClusterDbRevisionsQueryParams
	Headers     GetDescribeClusterDbRevisionsHeaders
}

type GetDescribeClusterDbRevisionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
