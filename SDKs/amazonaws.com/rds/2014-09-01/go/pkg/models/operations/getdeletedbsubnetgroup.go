package operations




type GetDeleteDbSubnetGroupActionEnum string

const (
    GetDeleteDbSubnetGroupActionEnumDeleteDbSubnetGroup GetDeleteDbSubnetGroupActionEnum = "DeleteDBSubnetGroup"
)



type GetDeleteDbSubnetGroupVersionEnum string

const (
    GetDeleteDbSubnetGroupVersionEnumTwoThousandAndFourteen0901 GetDeleteDbSubnetGroupVersionEnum = "2014-09-01"
)


type GetDeleteDbSubnetGroupQueryParams struct {
    Action GetDeleteDbSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbSubnetGroupName string `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
    Version GetDeleteDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetDeleteDbSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetDeleteDbSubnetGroupRequest struct {
    QueryParams GetDeleteDbSubnetGroupQueryParams 
    Headers GetDeleteDbSubnetGroupHeaders 
    
}

type GetDeleteDbSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

