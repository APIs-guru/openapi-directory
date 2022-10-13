package operations

type PostDescribeOrderableDbInstanceOptionsActionEnum string

const (
	PostDescribeOrderableDbInstanceOptionsActionEnumDescribeOrderableDbInstanceOptions PostDescribeOrderableDbInstanceOptionsActionEnum = "DescribeOrderableDBInstanceOptions"
)

type PostDescribeOrderableDbInstanceOptionsVersionEnum string

const (
	PostDescribeOrderableDbInstanceOptionsVersionEnumTwoThousandAndThirteen0110 PostDescribeOrderableDbInstanceOptionsVersionEnum = "2013-01-10"
)

type PostDescribeOrderableDbInstanceOptionsQueryParams struct {
	Action     PostDescribeOrderableDbInstanceOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                           `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                           `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeOrderableDbInstanceOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeOrderableDbInstanceOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeOrderableDbInstanceOptionsRequest struct {
	QueryParams PostDescribeOrderableDbInstanceOptionsQueryParams
	Headers     PostDescribeOrderableDbInstanceOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeOrderableDbInstanceOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
