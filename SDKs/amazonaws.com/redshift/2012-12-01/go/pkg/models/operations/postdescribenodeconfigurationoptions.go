package operations

type PostDescribeNodeConfigurationOptionsActionEnum string

const (
	PostDescribeNodeConfigurationOptionsActionEnumDescribeNodeConfigurationOptions PostDescribeNodeConfigurationOptionsActionEnum = "DescribeNodeConfigurationOptions"
)

type PostDescribeNodeConfigurationOptionsVersionEnum string

const (
	PostDescribeNodeConfigurationOptionsVersionEnumTwoThousandAndTwelve1201 PostDescribeNodeConfigurationOptionsVersionEnum = "2012-12-01"
)

type PostDescribeNodeConfigurationOptionsQueryParams struct {
	Action     PostDescribeNodeConfigurationOptionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeNodeConfigurationOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeNodeConfigurationOptionsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeNodeConfigurationOptionsRequest struct {
	QueryParams PostDescribeNodeConfigurationOptionsQueryParams
	Headers     PostDescribeNodeConfigurationOptionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeNodeConfigurationOptionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
