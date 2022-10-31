package operations

type PostDescribeDbClusterBacktracksActionEnum string

const (
	PostDescribeDbClusterBacktracksActionEnumDescribeDbClusterBacktracks PostDescribeDbClusterBacktracksActionEnum = "DescribeDBClusterBacktracks"
)

type PostDescribeDbClusterBacktracksVersionEnum string

const (
	PostDescribeDbClusterBacktracksVersionEnumTwoThousandAndFourteen1031 PostDescribeDbClusterBacktracksVersionEnum = "2014-10-31"
)

type PostDescribeDbClusterBacktracksQueryParams struct {
	Action     PostDescribeDbClusterBacktracksActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                    `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                    `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeDbClusterBacktracksVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDbClusterBacktracksHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeDbClusterBacktracksRequest struct {
	QueryParams PostDescribeDbClusterBacktracksQueryParams
	Headers     PostDescribeDbClusterBacktracksHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDbClusterBacktracksResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
