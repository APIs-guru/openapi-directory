package operations




type GetRebootDbInstanceActionEnum string

const (
    GetRebootDbInstanceActionEnumRebootDbInstance GetRebootDbInstanceActionEnum = "RebootDBInstance"
)



type GetRebootDbInstanceVersionEnum string

const (
    GetRebootDbInstanceVersionEnumTwoThousandAndFourteen0901 GetRebootDbInstanceVersionEnum = "2014-09-01"
)


type GetRebootDbInstanceQueryParams struct {
    Action GetRebootDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    ForceFailover *bool `queryParam:"style=form,explode=true,name=ForceFailover"`
    Version GetRebootDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRebootDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRebootDbInstanceRequest struct {
    QueryParams GetRebootDbInstanceQueryParams 
    Headers GetRebootDbInstanceHeaders 
    
}

type GetRebootDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

