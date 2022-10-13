package operations

type PostDescribeClustersActionEnum string

const (
	PostDescribeClustersActionEnumDescribeClusters PostDescribeClustersActionEnum = "DescribeClusters"
)

type PostDescribeClustersVersionEnum string

const (
	PostDescribeClustersVersionEnumTwoThousandAndTwelve1201 PostDescribeClustersVersionEnum = "2012-12-01"
)

type PostDescribeClustersQueryParams struct {
	Action     PostDescribeClustersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeClustersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeClustersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeClustersRequest struct {
	QueryParams PostDescribeClustersQueryParams
	Headers     PostDescribeClustersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeClustersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
