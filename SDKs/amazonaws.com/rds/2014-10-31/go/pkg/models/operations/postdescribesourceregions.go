package operations

type PostDescribeSourceRegionsActionEnum string

const (
	PostDescribeSourceRegionsActionEnumDescribeSourceRegions PostDescribeSourceRegionsActionEnum = "DescribeSourceRegions"
)

type PostDescribeSourceRegionsVersionEnum string

const (
	PostDescribeSourceRegionsVersionEnumTwoThousandAndFourteen1031 PostDescribeSourceRegionsVersionEnum = "2014-10-31"
)

type PostDescribeSourceRegionsQueryParams struct {
	Action     PostDescribeSourceRegionsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                              `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                              `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeSourceRegionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeSourceRegionsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeSourceRegionsRequest struct {
	QueryParams PostDescribeSourceRegionsQueryParams
	Headers     PostDescribeSourceRegionsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeSourceRegionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
