package operations

type PostDescribeDbClusterParameterGroupsActionEnum string

const (
	PostDescribeDbClusterParameterGroupsActionEnumDescribeDbClusterParameterGroups PostDescribeDbClusterParameterGroupsActionEnum = "DescribeDBClusterParameterGroups"
)

type PostDescribeDbClusterParameterGroupsVersionEnum string

const (
	PostDescribeDbClusterParameterGroupsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClusterParameterGroupsVersionEnum = "2014-10-31"
)

type PostDescribeDbClusterParameterGroupsQueryParams struct {
	Action     PostDescribeDbClusterParameterGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbClusterParameterGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbClusterParameterGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbClusterParameterGroupsRequest struct {
	QueryParams PostDescribeDbClusterParameterGroupsQueryParams
	Headers     PostDescribeDbClusterParameterGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbClusterParameterGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
