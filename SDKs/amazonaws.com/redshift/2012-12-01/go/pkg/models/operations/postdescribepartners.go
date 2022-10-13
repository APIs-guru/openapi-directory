package operations

type PostDescribePartnersActionEnum string

const (
	PostDescribePartnersActionEnumDescribePartners PostDescribePartnersActionEnum = "DescribePartners"
)

type PostDescribePartnersVersionEnum string

const (
	PostDescribePartnersVersionEnumTwoThousandAndTwelve1201 PostDescribePartnersVersionEnum = "2012-12-01"
)

type PostDescribePartnersQueryParams struct {
	Action  PostDescribePartnersActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Version PostDescribePartnersVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribePartnersHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribePartnersRequest struct {
	QueryParams PostDescribePartnersQueryParams
	Headers     PostDescribePartnersHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribePartnersResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
