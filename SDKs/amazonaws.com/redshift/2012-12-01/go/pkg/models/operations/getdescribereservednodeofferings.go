package operations

type GetDescribeReservedNodeOfferingsActionEnum string

const (
	GetDescribeReservedNodeOfferingsActionEnumDescribeReservedNodeOfferings GetDescribeReservedNodeOfferingsActionEnum = "DescribeReservedNodeOfferings"
)

type GetDescribeReservedNodeOfferingsVersionEnum string

const (
	GetDescribeReservedNodeOfferingsVersionEnumTwoThousandAndTwelve1201 GetDescribeReservedNodeOfferingsVersionEnum = "2012-12-01"
)

type GetDescribeReservedNodeOfferingsQueryParams struct {
	Action                 GetDescribeReservedNodeOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker                 *string                                     `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords             *int64                                      `queryParam:"style=form,explode=true,name=MaxRecords"`
	ReservedNodeOfferingID *string                                     `queryParam:"style=form,explode=true,name=ReservedNodeOfferingId"`
	Version                GetDescribeReservedNodeOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetDescribeReservedNodeOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetDescribeReservedNodeOfferingsRequest struct {
	QueryParams GetDescribeReservedNodeOfferingsQueryParams
	Headers     GetDescribeReservedNodeOfferingsHeaders
}

type GetDescribeReservedNodeOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
