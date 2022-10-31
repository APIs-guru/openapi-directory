package operations

type GetGetReservedNodeExchangeOfferingsActionEnum string

const (
	GetGetReservedNodeExchangeOfferingsActionEnumGetReservedNodeExchangeOfferings GetGetReservedNodeExchangeOfferingsActionEnum = "GetReservedNodeExchangeOfferings"
)

type GetGetReservedNodeExchangeOfferingsVersionEnum string

const (
	GetGetReservedNodeExchangeOfferingsVersionEnumTwoThousandAndTwelve1201 GetGetReservedNodeExchangeOfferingsVersionEnum = "2012-12-01"
)

type GetGetReservedNodeExchangeOfferingsQueryParams struct {
	Action         GetGetReservedNodeExchangeOfferingsActionEnum  `queryParam:"style=form,explode=true,name=Action"`
	Marker         *string                                        `queryParam:"style=form,explode=true,name=Marker"`
	MaxRecords     *int64                                         `queryParam:"style=form,explode=true,name=MaxRecords"`
	ReservedNodeID string                                         `queryParam:"style=form,explode=true,name=ReservedNodeId"`
	Version        GetGetReservedNodeExchangeOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
}

type GetGetReservedNodeExchangeOfferingsHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type GetGetReservedNodeExchangeOfferingsRequest struct {
	QueryParams GetGetReservedNodeExchangeOfferingsQueryParams
	Headers     GetGetReservedNodeExchangeOfferingsHeaders
}

type GetGetReservedNodeExchangeOfferingsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
