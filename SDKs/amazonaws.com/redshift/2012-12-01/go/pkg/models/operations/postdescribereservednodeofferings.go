package operations

type PostDescribeReservedNodeOfferingsActionEnum string

const (
	PostDescribeReservedNodeOfferingsActionEnumDescribeReservedNodeOfferings PostDescribeReservedNodeOfferingsActionEnum = "DescribeReservedNodeOfferings"
)

type PostDescribeReservedNodeOfferingsVersionEnum string

const (
	PostDescribeReservedNodeOfferingsVersionEnumTwoThousandAndTwelve1201 PostDescribeReservedNodeOfferingsVersionEnum = "2012-12-01"
)

type PostDescribeReservedNodeOfferingsQueryParams struct {
	Action     PostDescribeReservedNodeOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                      `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeReservedNodeOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedNodeOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedNodeOfferingsRequest struct {
	QueryParams PostDescribeReservedNodeOfferingsQueryParams
	Headers     PostDescribeReservedNodeOfferingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedNodeOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
