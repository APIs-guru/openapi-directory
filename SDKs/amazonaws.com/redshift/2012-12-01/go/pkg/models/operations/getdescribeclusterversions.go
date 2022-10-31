package operations

type GetDescribeClusterVersionsActionEnum string

const (
	GetDescribeClusterVersionsActionEnumDescribeClusterVersions GetDescribeClusterVersionsActionEnum = "DescribeClusterVersions"
)

type GetDescribeClusterVersionsVersionEnum string

const (
	GetDescribeClusterVersionsVersionEnumTwoThousandAndTwelve1201 GetDescribeClusterVersionsVersionEnum = "2012-12-01"
)

type GetDescribeClusterVersionsQueryParams struct {
	Action                      GetDescribeClusterVersionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterParameterGroupFamily *string                               `queryParam:"style=form,explode=true,name=ClusterParameterGroupFamily"`
	ClusterVersion              *string                               `queryParam:"style=form,explode=true,name=ClusterVersion"`
	Marker                      *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords                  *int64                                `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version                     GetDescribeClusterVersionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClusterVersionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeClusterVersionsRequest struct {
	QueryParams GetDescribeClusterVersionsQueryParams
	Headers     GetDescribeClusterVersionsHeaders
}

type GetDescribeClusterVersionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
