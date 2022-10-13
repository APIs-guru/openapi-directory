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
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
