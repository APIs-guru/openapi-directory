package operations

type GetDescribeResizeActionEnum string

const (
	GetDescribeResizeActionEnumDescribeResize GetDescribeResizeActionEnum = "DescribeResize"
)

type GetDescribeResizeVersionEnum string

const (
	GetDescribeResizeVersionEnumTwoThousandAndTwelve1201 GetDescribeResizeVersionEnum = "2012-12-01"
)

type GetDescribeResizeQueryParams struct {
	Action            GetDescribeResizeActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier string                       `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Version           GetDescribeResizeVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeResizeHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetDescribeResizeRequest struct {
	QueryParams GetDescribeResizeQueryParams
	Headers     GetDescribeResizeHeaders
}

type GetDescribeResizeResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
