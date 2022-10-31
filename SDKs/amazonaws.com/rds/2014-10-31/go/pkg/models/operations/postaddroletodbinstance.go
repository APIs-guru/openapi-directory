package operations




type PostAddRoleToDbInstanceActionEnum string

const (
    PostAddRoleToDbInstanceActionEnumAddRoleToDbInstance PostAddRoleToDbInstanceActionEnum = "AddRoleToDBInstance"
)



type PostAddRoleToDbInstanceVersionEnum string

const (
    PostAddRoleToDbInstanceVersionEnumTwoThousandAndFourteen1031 PostAddRoleToDbInstanceVersionEnum = "2014-10-31"
)


type PostAddRoleToDbInstanceQueryParams struct {
    Action PostAddRoleToDbInstanceActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostAddRoleToDbInstanceVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostAddRoleToDbInstanceHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostAddRoleToDbInstanceRequest struct {
    QueryParams PostAddRoleToDbInstanceQueryParams 
    Headers PostAddRoleToDbInstanceHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostAddRoleToDbInstanceResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

