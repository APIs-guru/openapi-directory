package operations

type PostDescribeDbProxyTargetsActionEnum string

const (
	PostDescribeDbProxyTargetsActionEnumDescribeDbProxyTargets PostDescribeDbProxyTargetsActionEnum = "DescribeDBProxyTargets"
)

type PostDescribeDbProxyTargetsVersionEnum string

const (
	PostDescribeDbProxyTargetsVersionEnumTwoThousandAndFourteen1031 PostDescribeDbProxyTargetsVersionEnum = "2014-10-31"
)

type PostDescribeDbProxyTargetsQueryParams struct {
	Action     PostDescribeDbProxyTargetsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                               `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                               `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbProxyTargetsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbProxyTargetsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbProxyTargetsRequest struct {
	QueryParams PostDescribeDbProxyTargetsQueryParams
	Headers     PostDescribeDbProxyTargetsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbProxyTargetsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
