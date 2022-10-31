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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
