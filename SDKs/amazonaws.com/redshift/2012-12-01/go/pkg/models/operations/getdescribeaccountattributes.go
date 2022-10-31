package operations

type GetDescribeAccountAttributesActionEnum string

const (
	GetDescribeAccountAttributesActionEnumDescribeAccountAttributes GetDescribeAccountAttributesActionEnum = "DescribeAccountAttributes"
)

type GetDescribeAccountAttributesVersionEnum string

const (
	GetDescribeAccountAttributesVersionEnumTwoThousandAndTwelve1201 GetDescribeAccountAttributesVersionEnum = "2012-12-01"
)

type GetDescribeAccountAttributesQueryParams struct {
	Action         GetDescribeAccountAttributesActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	AttributeNames []string                                `queryParam:"style=form,explode=true,name=AttributeNames"`
	Version        GetDescribeAccountAttributesVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeAccountAttributesHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeAccountAttributesRequest struct {
	QueryParams GetDescribeAccountAttributesQueryParams
	Headers     GetDescribeAccountAttributesHeaders
}

type GetDescribeAccountAttributesResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
