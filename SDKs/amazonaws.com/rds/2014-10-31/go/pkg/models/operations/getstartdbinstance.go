package operations




type GetStartDbInstanceActionEnum string

const (
    GetStartDbInstanceActionEnumStartDbInstance GetStartDbInstanceActionEnum = "StartDBInstance"
)



type GetStartDbInstanceVersionEnum string

const (
    GetStartDbInstanceVersionEnumTwoThousandAndFourteen1031 GetStartDbInstanceVersionEnum = "2014-10-31"
)


type GetStartDbInstanceQueryParams struct {
    Action GetStartDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    Version GetStartDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetStartDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetStartDbInstanceRequest struct {
    QueryParams GetStartDbInstanceQueryParams 
    Headers GetStartDbInstanceHeaders 
    
}

type GetStartDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

