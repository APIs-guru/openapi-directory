package operations

import (
"openapi/pkg/models/shared")

type GetLayerVersionPathParams struct {
    LayerName string `pathParam:"style=simple,explode=false,name=LayerName"`
    VersionNumber int64 `pathParam:"style=simple,explode=false,name=VersionNumber"`
    
}

type GetLayerVersionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetLayerVersionRequest struct {
    PathParams GetLayerVersionPathParams 
    Headers GetLayerVersionHeaders 
    
}

type GetLayerVersionResponse struct {
    ContentType string 
    GetLayerVersionResponse *shared.GetLayerVersionResponse 
    InvalidParameterValueException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceException *interface{} 
    StatusCode int64 
    TooManyRequestsException *interface{} 
    
}

