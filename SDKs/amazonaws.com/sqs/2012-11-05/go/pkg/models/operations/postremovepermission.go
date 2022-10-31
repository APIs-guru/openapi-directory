package operations




type PostRemovePermissionActionEnum string

const (
    PostRemovePermissionActionEnumRemovePermission PostRemovePermissionActionEnum = "RemovePermission"
)



type PostRemovePermissionVersionEnum string

const (
    PostRemovePermissionVersionEnumTwoThousandAndTwelve1105 PostRemovePermissionVersionEnum = "2012-11-05"
)


type PostRemovePermissionQueryParams struct {
    Action PostRemovePermissionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Version PostRemovePermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type PostRemovePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type PostRemovePermissionRequest struct {
    QueryParams PostRemovePermissionQueryParams 
    Headers PostRemovePermissionHeaders 
    Request []byte `request:"mediaType=text/xml"`
    
}

type PostRemovePermissionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

