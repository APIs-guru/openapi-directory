package operations




type PostPurchaseReservedDbInstancesOfferingActionEnum string

const (
    PostPurchaseReservedDbInstancesOfferingActionEnumPurchaseReservedDbInstancesOffering PostPurchaseReservedDbInstancesOfferingActionEnum = "PurchaseReservedDBInstancesOffering"
)



type PostPurchaseReservedDbInstancesOfferingVersionEnum string

const (
    PostPurchaseReservedDbInstancesOfferingVersionEnumTwoThousandAndFourteen0901 PostPurchaseReservedDbInstancesOfferingVersionEnum = "2014-09-01"
)


type PostPurchaseReservedDbInstancesOfferingQueryParams struct {
    Action PostPurchaseReservedDbInstancesOfferingActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostPurchaseReservedDbInstancesOfferingVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostPurchaseReservedDbInstancesOfferingHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostPurchaseReservedDbInstancesOfferingRequest struct {
    QueryParams PostPurchaseReservedDbInstancesOfferingQueryParams 
    Headers PostPurchaseReservedDbInstancesOfferingHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostPurchaseReservedDbInstancesOfferingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

