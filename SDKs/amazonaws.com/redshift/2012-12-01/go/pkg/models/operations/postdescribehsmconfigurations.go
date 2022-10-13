package operations

type PostDescribeHsmConfigurationsActionEnum string

const (
	PostDescribeHsmConfigurationsActionEnumDescribeHsmConfigurations PostDescribeHsmConfigurationsActionEnum = "DescribeHsmConfigurations"
)

type PostDescribeHsmConfigurationsVersionEnum string

const (
	PostDescribeHsmConfigurationsVersionEnumTwoThousandAndTwelve1201 PostDescribeHsmConfigurationsVersionEnum = "2012-12-01"
)

type PostDescribeHsmConfigurationsQueryParams struct {
	Action     PostDescribeHsmConfigurationsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                  `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                  `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeHsmConfigurationsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeHsmConfigurationsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeHsmConfigurationsRequest struct {
	QueryParams PostDescribeHsmConfigurationsQueryParams
	Headers     PostDescribeHsmConfigurationsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeHsmConfigurationsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
