package operations

type GetDescribeLoggingStatusActionEnum string

const (
	GetDescribeLoggingStatusActionEnumDescribeLoggingStatus GetDescribeLoggingStatusActionEnum = "DescribeLoggingStatus"
)

type GetDescribeLoggingStatusVersionEnum string

const (
	GetDescribeLoggingStatusVersionEnumTwoThousandAndTwelve1201 GetDescribeLoggingStatusVersionEnum = "2012-12-01"
)

type GetDescribeLoggingStatusQueryParams struct {
	Action            GetDescribeLoggingStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                              `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetDescribeLoggingStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeLoggingStatusHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeLoggingStatusRequest struct {
	QueryParams GetDescribeLoggingStatusQueryParams
	Headers     GetDescribeLoggingStatusHeaders
}

type GetDescribeLoggingStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
