package operations



type GetRemovePermissionPathParams struct {
    AccountNumber int64 `pathParam:"style=simple,explode=false,name=AccountNumber"`
    QueueName string `pathParam:"style=simple,explode=false,name=QueueName"`
    
}


type GetRemovePermissionActionEnum string

const (
    GetRemovePermissionActionEnumRemovePermission GetRemovePermissionActionEnum = "RemovePermission"
)



type GetRemovePermissionVersionEnum string

const (
    GetRemovePermissionVersionEnumTwoThousandAndTwelve1105 GetRemovePermissionVersionEnum = "2012-11-05"
)


type GetRemovePermissionQueryParams struct {
    Action GetRemovePermissionActionEnum `queryParam:"style=form,explode=true,name=Action"`
    Label string `queryParam:"style=form,explode=true,name=Label"`
    Version GetRemovePermissionVersionEnum `queryParam:"style=form,explode=true,name=Version"`
    
}

type GetRemovePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetRemovePermissionRequest struct {
    PathParams GetRemovePermissionPathParams 
    QueryParams GetRemovePermissionQueryParams 
    Headers GetRemovePermissionHeaders 
    
}

type GetRemovePermissionResponse struct {
    ContentType string 
    StatusCode int64 
    
}

