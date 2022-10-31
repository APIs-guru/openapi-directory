package operations

type PostDescribeTableRestoreStatusActionEnum string

const (
	PostDescribeTableRestoreStatusActionEnumDescribeTableRestoreStatus PostDescribeTableRestoreStatusActionEnum = "DescribeTableRestoreStatus"
)

type PostDescribeTableRestoreStatusVersionEnum string

const (
	PostDescribeTableRestoreStatusVersionEnumTwoThousandAndTwelve1201 PostDescribeTableRestoreStatusVersionEnum = "2012-12-01"
)

type PostDescribeTableRestoreStatusQueryParams struct {
	Action     PostDescribeTableRestoreStatusActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                   `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                   `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeTableRestoreStatusVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeTableRestoreStatusHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeTableRestoreStatusRequest struct {
	QueryParams PostDescribeTableRestoreStatusQueryParams
	Headers     PostDescribeTableRestoreStatusHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeTableRestoreStatusResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
