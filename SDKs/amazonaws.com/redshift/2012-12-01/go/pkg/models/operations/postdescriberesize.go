package operations

type PostDescribeResizeActionEnum string

const (
	PostDescribeResizeActionEnumDescribeResize PostDescribeResizeActionEnum = "DescribeResize"
)

type PostDescribeResizeVersionEnum string

const (
	PostDescribeResizeVersionEnumTwoThousandAndTwelve1201 PostDescribeResizeVersionEnum = "2012-12-01"
)

type PostDescribeResizeQueryParams struct {
	Action  PostDescribeResizeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeResizeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeResizeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeResizeRequest struct {
	QueryParams PostDescribeResizeQueryParams
	Headers     PostDescribeResizeHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeResizeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
