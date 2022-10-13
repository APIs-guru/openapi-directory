package operations

type PostDescribeReservedDbInstancesOfferingsActionEnum string

const (
	PostDescribeReservedDbInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings PostDescribeReservedDbInstancesOfferingsActionEnum = "DescribeReservedDBInstancesOfferings"
)

type PostDescribeReservedDbInstancesOfferingsVersionEnum string

const (
	PostDescribeReservedDbInstancesOfferingsVersionEnumTwoThousandAndThirteen0909 PostDescribeReservedDbInstancesOfferingsVersionEnum = "2013-09-09"
)

type PostDescribeReservedDbInstancesOfferingsQueryParams struct {
	Action     PostDescribeReservedDbInstancesOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker     *string                                             `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords *string                                             `queryParam:"style=form,explode=true,name=MaxRecords"`
	Version    PostDescribeReservedDbInstancesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type PostDescribeReservedDbInstancesOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type PostDescribeReservedDbInstancesOfferingsRequest struct {
	QueryParams PostDescribeReservedDbInstancesOfferingsQueryParams
	Headers     PostDescribeReservedDbInstancesOfferingsHeaders
	Request     []byte `request:"mediaType=text/xml"`
}

type PostDescribeReservedDbInstancesOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
