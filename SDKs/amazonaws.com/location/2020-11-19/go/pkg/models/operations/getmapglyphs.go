package operations

import (
"openapi/pkg/models/shared")

type GetMapGlyphsPathParams struct {
    FontStack string `pathParam:"style=simple,explode=false,name=FontStack"`
    FontUnicodeRange string `pathParam:"style=simple,explode=false,name=FontUnicodeRange"`
    MapName string `pathParam:"style=simple,explode=false,name=MapName"`
    
}

type GetMapGlyphsHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetMapGlyphsRequest struct {
    PathParams GetMapGlyphsPathParams 
    Headers GetMapGlyphsHeaders 
    
}

type GetMapGlyphsResponse struct {
    AccessDeniedException *interface{} 
    ContentType string 
    GetMapGlyphsResponse *shared.GetMapGlyphsResponse 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

