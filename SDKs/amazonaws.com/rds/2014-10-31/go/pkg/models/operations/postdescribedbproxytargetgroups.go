package operations

type PostDescribeDbProxyTargetGroupsActionEnum string

const (
	PostDescribeDbProxyTargetGroupsActionEnumDescribeDbProxyTargetGroups PostDescribeDbProxyTargetGroupsActionEnum = "DescribeDBProxyTargetGroups"
)

type PostDescribeDbProxyTargetGroupsVersionEnum string

const (
	PostDescribeDbProxyTargetGroupsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbProxyTargetGroupsVersionEnum = "2014-10-31"
)

type PostDescribeDbProxyTargetGroupsQueryParams struct {
	Action     PostDescribeDbProxyTargetGroupsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbProxyTargetGroupsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbProxyTargetGroupsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbProxyTargetGroupsRequest struct {
	QueryParams PostDescribeDbProxyTargetGroupsQueryParams
	Headers     PostDescribeDbProxyTargetGroupsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbProxyTargetGroupsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
