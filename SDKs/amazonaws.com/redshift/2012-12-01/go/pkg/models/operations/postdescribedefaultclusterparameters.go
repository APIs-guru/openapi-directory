package operations

type PostDescribeDefaultClusterParametersActionEnum string

const (
	PostDescribeDefaultClusterParametersActionEnumDescribeDefaultClusterParameters PostDescribeDefaultClusterParametersActionEnum = "DescribeDefaultClusterParameters"
)

type PostDescribeDefaultClusterParametersVersionEnum string

const (
	PostDescribeDefaultClusterParametersVersionEnumTwoThousandAndTwelve1201 PostDescribeDefaultClusterParametersVersionEnum = "2012-12-01"
)

type PostDescribeDefaultClusterParametersQueryParams struct {
	Action     PostDescribeDefaultClusterParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                         `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDefaultClusterParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDefaultClusterParametersHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDefaultClusterParametersRequest struct {
	QueryParams PostDescribeDefaultClusterParametersQueryParams
	Headers     PostDescribeDefaultClusterParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDefaultClusterParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
