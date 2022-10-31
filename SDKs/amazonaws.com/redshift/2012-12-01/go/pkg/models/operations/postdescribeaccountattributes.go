package operations

type PostDescribeAccountAttributesActionEnum string

const (
	PostDescribeAccountAttributesActionEnumDescribeAccountAttributes PostDescribeAccountAttributesActionEnum = "DescribeAccountAttributes"
)

type PostDescribeAccountAttributesVersionEnum string

const (
	PostDescribeAccountAttributesVersionEnumTwoThousandAndTwelve1201 PostDescribeAccountAttributesVersionEnum = "2012-12-01"
)

type PostDescribeAccountAttributesQueryParams struct {
	Action  PostDescribeAccountAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribeAccountAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeAccountAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type PostDescribeAccountAttributesRequest struct {
	QueryParams PostDescribeAccountAttributesQueryParams
	Headers     PostDescribeAccountAttributesHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeAccountAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
