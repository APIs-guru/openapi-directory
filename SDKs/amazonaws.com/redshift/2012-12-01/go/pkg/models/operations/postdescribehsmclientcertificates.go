package operations

type PostDescribeHsmClientCertificatesActionEnum string

const (
	PostDescribeHsmClientCertificatesActionEnumDescribeHsmClientCertificates PostDescribeHsmClientCertificatesActionEnum = "DescribeHsmClientCertificates"
)

type PostDescribeHsmClientCertificatesVersionEnum string

const (
	PostDescribeHsmClientCertificatesVersionEnumTwoThousandAndTwelve1201 PostDescribeHsmClientCertificatesVersionEnum = "2012-12-01"
)

type PostDescribeHsmClientCertificatesQueryParams struct {
	Action     PostDescribeHsmClientCertificatesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                      `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeHsmClientCertificatesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeHsmClientCertificatesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeHsmClientCertificatesRequest struct {
	QueryParams PostDescribeHsmClientCertificatesQueryParams
	Headers     PostDescribeHsmClientCertificatesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeHsmClientCertificatesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
