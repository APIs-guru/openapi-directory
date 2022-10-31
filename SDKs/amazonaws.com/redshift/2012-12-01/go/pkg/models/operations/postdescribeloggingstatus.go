package operations

type PostDescribeLoggingStatusActionEnum string

const (
	PostDescribeLoggingStatusActionEnumDescribeLoggingStatus PostDescribeLoggingStatusActionEnum = "DescribeLoggingStatus"
)

type PostDescribeLoggingStatusVersionEnum string

const (
	PostDescribeLoggingStatusVersionEnumTwoThousandAndTwelve1201 PostDescribeLoggingStatusVersionEnum = "2012-12-01"
)

type PostDescribeLoggingStatusQueryParams struct {
	Action  PostDescribeLoggingStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeLoggingStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeLoggingStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeLoggingStatusRequest struct {
	QueryParams PostDescribeLoggingStatusQueryParams
	Headers     PostDescribeLoggingStatusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeLoggingStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
