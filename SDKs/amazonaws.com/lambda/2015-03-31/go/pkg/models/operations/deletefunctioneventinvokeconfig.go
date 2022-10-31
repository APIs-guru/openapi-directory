package operations



type DeleteFunctionEventInvokeConfigPathParams struct {
    FunctionName string `pathParam:"style=simple,explode=false,name=FunctionName"`
    
}

type DeleteFunctionEventInvokeConfigQueryParams struct {
    Qualifier *string `queryParam:"style=form,explode=true,name=Qualifier"`
    
}

type DeleteFunctionEventInvokeConfigHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteFunctionEventInvokeConfigRequest struct {
    PathParams DeleteFunctionEventInvokeConfigPathParams 
    QueryParams DeleteFunctionEventInvokeConfigQueryParams 
    Headers DeleteFunctionEventInvokeConfigHeaders 
    
}

type DeleteFunctionEventInvokeConfigResponse struct {
    ContentType string 
    InvalidParameterValueException *interface{} 
    ResourceConflictException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

