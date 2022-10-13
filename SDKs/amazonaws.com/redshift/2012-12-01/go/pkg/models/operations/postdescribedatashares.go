package operations

type PostDescribeDataSharesActionEnum string

const (
	PostDescribeDataSharesActionEnumDescribeDataShares PostDescribeDataSharesActionEnum = "DescribeDataShares"
)

type PostDescribeDataSharesVersionEnum string

const (
	PostDescribeDataSharesVersionEnumTwoThousandAndTwelve1201 PostDescribeDataSharesVersionEnum = "2012-12-01"
)

type PostDescribeDataSharesQueryParams struct {
	Action  PostDescribeDataSharesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeDataSharesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeDataSharesHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeDataSharesRequest struct {
	QueryParams PostDescribeDataSharesQueryParams
	Headers     PostDescribeDataSharesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeDataSharesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
