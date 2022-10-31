package operations

type GetDescribeClustersActionEnum string

const (
	GetDescribeClustersActionEnumDescribeClusters GetDescribeClustersActionEnum = "DescribeClusters"
)

type GetDescribeClustersVersionEnum string

const (
	GetDescribeClustersVersionEnumTwoThousandAndTwelve1201 GetDescribeClustersVersionEnum = "2012-12-01"
)

type GetDescribeClustersQueryParams struct {
	Action            GetDescribeClustersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	ClusterIdentifier *string                        `queryParam:"style=form,explode=true,name=ClusterIdentifier"`
	Marker            *string                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords        *int64                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	TagKeys           []string                       `queryParam:"style=form,explode=true,name=TagKeys"`
	TagValues         []string                       `queryParam:"style=form,explode=true,name=TagValues"`
	Version           GetDescribeClustersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeClustersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeClustersRequest struct {
	QueryParams GetDescribeClustersQueryParams
	Headers     GetDescribeClustersHeaders
}

type GetDescribeClustersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
