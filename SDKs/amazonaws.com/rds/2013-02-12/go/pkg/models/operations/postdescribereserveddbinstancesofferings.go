package operations




type PostDescribeReservedDbInstancesOfferingsActionEnum string

const (
    PostDescribeReservedDbInstancesOfferingsActionEnumDescribeReservedDbInstancesOfferings PostDescribeReservedDbInstancesOfferingsActionEnum = "DescribeReservedDBInstancesOfferings"
)



type PostDescribeReservedDbInstancesOfferingsVersionEnum string

const (
    PostDescribeReservedDbInstancesOfferingsVersionEnumTwoThousandAndThirteen0212 PostDescribeReservedDbInstancesOfferingsVersionEnum = "2013-02-12"
)


type PostDescribeReservedDbInstancesOfferingsQueryParams struct {
    Action PostDescribeReservedDbInstancesOfferingsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeReservedDbInstancesOfferingsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeReservedDbInstancesOfferingsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeReservedDbInstancesOfferingsRequest struct {
    QueryParams PostDescribeReservedDbInstancesOfferingsQueryParams 
    Headers PostDescribeReservedDbInstancesOfferingsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeReservedDbInstancesOfferingsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

