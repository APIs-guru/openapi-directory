package operations




type GetDescribeReservedDbInstancesOfferingsActionEnum string

const (
    GetDescribeReservedDbInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings GetDescribeReservedDbInstancesOfferingsActionEnum = "DescribeReservedDBInstancesOfferings"
)



type GetDescribeReservedDbInstancesOfferingsVersionEnum string

const (
    GetDescribeReservedDbInstancesOfferingsVersionEnumTwoThousandAndThirteen0110 GetDescribeReservedDbInstancesOfferingsVersionEnum = "2013-01-10"
)


type GetDescribeReservedDbInstancesOfferingsQueryParams struct {
    Action GetDescribeReservedDbInstancesOfferingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbInstanceClass *string `queryParam:"style=form,explode=true,name=DBInstanceClass"`
    Duration *string `queryParam:"style=form,explode=true,name=Duration"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *int64 `queryParam:"style=form,explode=true,name=MaxRecords"`
    MultiAz *bool `queryParam:"style=form,explode=true,name=MultiAZ"`
    OfferingType *string `queryParam:"style=form,explode=true,name=OfferingType"`
    ProductDescription *string `queryParam:"style=form,explode=true,name=ProductDescription"`
    ReservedDbInstancesOfferingID *string `queryParam:"style=form,explode=true,name=ReservedDBInstancesOfferingId"`
    Version GetDescribeReservedDbInstancesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDescribeReservedDbInstancesOfferingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDescribeReservedDbInstancesOfferingsRequest struct {
    QueryParams GetDescribeReservedDbInstancesOfferingsQueryParams 
    Headers GetDescribeReservedDbInstancesOfferingsHeaders 
    
}

type GetDescribeReservedDbInstancesOfferingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

