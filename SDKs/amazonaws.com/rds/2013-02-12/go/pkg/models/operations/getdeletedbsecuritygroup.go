package operations




type GetDeleteDbSecurityGroupActionEnum string

const (
    GetDeleteDbSecurityGroupActionEnumDeleteDbSecurityGroup GetDeleteDbSecurityGroupActionEnum = "DeleteDBSecurityGroup"
)



type GetDeleteDbSecurityGroupVersionEnum string

const (
    GetDeleteDbSecurityGroupVersionEnumTwoThousandAndThirteen0212 GetDeleteDbSecurityGroupVersionEnum = "2013-02-12"
)


type GetDeleteDbSecurityGroupQueryParams struct {
    Action GetDeleteDbSecurityGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbSecurityGroupName string `queryParam:"style=form,explode=true,name=DBSecurityGroupName"`
    Version GetDeleteDbSecurityGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteDbSecurityGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteDbSecurityGroupRequest struct {
    QueryParams GetDeleteDbSecurityGroupQueryParams 
    Headers GetDeleteDbSecurityGroupHeaders 
    
}

type GetDeleteDbSecurityGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

