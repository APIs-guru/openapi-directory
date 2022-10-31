package operations




type PostPurchaseReservedNodeOfferingActionEnum string

const (
    PostPurchaseReservedNodeOfferingActionEnumPurchaseReservedNodeOffering PostPurchaseReservedNodeOfferingActionEnum = "PurchaseReservedNodeOffering"
)



type PostPurchaseReservedNodeOfferingVersionEnum string

const (
    PostPurchaseReservedNodeOfferingVersionEnumTwoThousandAndTwelve1201 PostPurchaseReservedNodeOfferingVersionEnum = "2012-12-01"
)


type PostPurchaseReservedNodeOfferingQueryParams struct {
    Action PostPurchaseReservedNodeOfferingActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPurchaseReservedNodeOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPurchaseReservedNodeOfferingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPurchaseReservedNodeOfferingRequest struct {
    QueryParams PostPurchaseReservedNodeOfferingQueryParams 
    Headers PostPurchaseReservedNodeOfferingHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPurchaseReservedNodeOfferingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

