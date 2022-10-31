package operations



type RemovePermissionPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    StatementID string `pathParam:"style=simple,explode=false,name=StatementId"`
    
}

type RemovePermissionQueryParams struct {
    Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
    RevisionID *string `queryParam:"style=form,explode=true,name=RevisionId"`
    
}

type RemovePermissionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type RemovePermissionRequest struct {
    PathParams RemovePermissionPathParams 
    QueryParams RemovePermissionQueryParams 
    Headers RemovePermissionHeaders 
    
}

type RemovePermissionResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    PreconditionFailedException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

