package operations

type PostDescribeOrderableClusterOptionsActionEnum string

const (
	PostDescribeOrderableClusterOptionsActionEnumDescribeOrderableClusterOptions PostDescribeOrderableClusterOptionsActionEnum = "DescribeOrderableClusterOptions"
)

type PostDescribeOrderableClusterOptionsVersionEnum string

const (
	PostDescribeOrderableClusterOptionsVersionEnumTwoThousandAndTwelve1201 PostDescribeOrderableClusterOptionsVersionEnum = "2012-12-01"
)

type PostDescribeOrderableClusterOptionsQueryParams struct {
	Action     PostDescribeOrderableClusterOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                        `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeOrderableClusterOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeOrderableClusterOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeOrderableClusterOptionsRequest struct {
	QueryParams PostDescribeOrderableClusterOptionsQueryParams
	Headers     PostDescribeOrderableClusterOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeOrderableClusterOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
