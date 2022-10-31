package operations




type PostGetReservedNodeExchangeOfferingsActionEnum string

const (
    PostGetReservedNodeExchangeOfferingsActionEnumGetReservedNodeExchangeOfferings PostGetReservedNodeExchangeOfferingsActionEnum = "GetReservedNodeExchangeOfferings"
)



type PostGetReservedNodeExchangeOfferingsVersionEnum string

const (
    PostGetReservedNodeExchangeOfferingsVersionEnumTwoThousandAndTwelve1201 PostGetReservedNodeExchangeOfferingsVersionEnum = "2012-12-01"
)


type PostGetReservedNodeExchangeOfferingsQueryParams struct {
    Action PostGetReservedNodeExchangeOfferingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostGetReservedNodeExchangeOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostGetReservedNodeExchangeOfferingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostGetReservedNodeExchangeOfferingsRequest struct {
    QueryParams PostGetReservedNodeExchangeOfferingsQueryParams 
    Headers PostGetReservedNodeExchangeOfferingsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostGetReservedNodeExchangeOfferingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

