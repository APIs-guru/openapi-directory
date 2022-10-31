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
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
