package operations




type GetCreateDbSubnetGroupActionEnum string

const (
    GetCreateDbSubnetGroupActionEnumCreateDbSubnetGroup GetCreateDbSubnetGroupActionEnum = "CreateDBSubnetGroup"
)



type GetCreateDbSubnetGroupVersionEnum string

const (
    GetCreateDbSubnetGroupVersionEnumTwoThousandAndThirteen0212 GetCreateDbSubnetGroupVersionEnum = "2013-02-12"
)


type GetCreateDbSubnetGroupQueryParams struct {
    Action GetCreateDbSubnetGroupActionEnum `queryParam:"style=form,explode=true,name=Action"`
    DbSubnetGroupDescription string `queryParam:"style=form,explode=true,name=DBSubnetGroupDescription"`
    DbSubnetGroupName string `queryParam:"style=form,explode=true,name=DBSubnetGroupName"`
    SubnetIds []string `queryParam:"style=form,explode=true,name=SubnetIds"`
    Version GetCreateDbSubnetGroupVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetCreateDbSubnetGroupHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetCreateDbSubnetGroupRequest struct {
    QueryParams GetCreateDbSubnetGroupQueryParams 
    Headers GetCreateDbSubnetGroupHeaders 
    
}

type GetCreateDbSubnetGroupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

