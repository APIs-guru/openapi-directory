package operations

type PostDescribeDbClusterParametersActionEnum string

const (
	PostDescribeDbClusterParametersActionEnumDescribeDbClusterParameters PostDescribeDbClusterParametersActionEnum = "DescribeDBClusterParameters"
)

type PostDescribeDbClusterParametersVersionEnum string

const (
	PostDescribeDbClusterParametersVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClusterParametersVersionEnum = "2014-10-31"
)

type PostDescribeDbClusterParametersQueryParams struct {
	Action     PostDescribeDbClusterParametersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbClusterParametersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbClusterParametersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDbClusterParametersRequest struct {
	QueryParams PostDescribeDbClusterParametersQueryParams
	Headers     PostDescribeDbClusterParametersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbClusterParametersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
