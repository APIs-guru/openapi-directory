package operations




type GetDeleteDbInstanceActionEnum string

const (
    GetDeleteDbInstanceActionEnumDeleteDbInstance GetDeleteDbInstanceActionEnum = "DeleteDBInstance"
)



type GetDeleteDbInstanceVersionEnum string

const (
    GetDeleteDbInstanceVersionEnumTwoThousandAndThirteen0909 GetDeleteDbInstanceVersionEnum = "2013-09-09"
)


type GetDeleteDbInstanceQueryParams struct {
    Action GetDeleteDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbInstanceIdentifier string `queryParam:"style=form,explode=true,name=DBInstanceIdentifier"`
    FinalDbSnapshotIdentifier *string `queryParam:"style=form,explode=true,name=FinalDBSnapshotIdentifier"`
    SkipFinalSnapshot *bool `queryParam:"style=form,explode=true,name=SkipFinalSnapshot"`
    Version GetDeleteDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteDbInstanceRequest struct {
    QueryParams GetDeleteDbInstanceQueryParams 
    Headers GetDeleteDbInstanceHeaders 
    
}

type GetDeleteDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

