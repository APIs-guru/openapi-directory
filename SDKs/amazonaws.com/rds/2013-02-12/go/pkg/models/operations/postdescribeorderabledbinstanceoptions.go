package operations




type PostDescribeOrderableDbInstanceOptionsActionEnum string

const (
    PostDescribeOrderableDbInstanceOptionsActionEnumDescribeOrderableDbInstanceOptions PostDescribeOrderableDbInstanceOptionsActionEnum = "DescribeOrderableDBInstanceOptions"
)



type PostDescribeOrderableDbInstanceOptionsVersionEnum string

const (
    PostDescribeOrderableDbInstanceOptionsVersionEnumTwoThousandAndThirteen0212 PostDescribeOrderableDbInstanceOptionsVersionEnum = "2013-02-12"
)


type PostDescribeOrderableDbInstanceOptionsQueryParams struct {
    Action PostDescribeOrderableDbInstanceOptionsActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Marker *string `queryParam:"style=form,explode=true,name=Marker"`
    MaxRecords *string `queryParam:"style=form,explode=true,name=MaxRecords"`
    Version PostDescribeOrderableDbInstanceOptionsVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostDescribeOrderableDbInstanceOptionsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostDescribeOrderableDbInstanceOptionsRequest struct {
    QueryParams PostDescribeOrderableDbInstanceOptionsQueryParams 
    Headers PostDescribeOrderableDbInstanceOptionsHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostDescribeOrderableDbInstanceOptionsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

