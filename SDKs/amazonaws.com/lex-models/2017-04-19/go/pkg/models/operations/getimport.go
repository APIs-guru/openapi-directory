package operations

import (
"openapi/pkg/models/shared")

type GetImportPathParams struct {
    ImportID string `pathParam:"style=simple,explode=false,name=importId"`
    
}

type GetImportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type GetImportRequest struct {
    PathParams GetImportPathParams 
    Headers GetImportHeaders 
    
}

type GetImportResponse struct {
    BadRequestException *interface{} 
    ContentType string 
    GetImportResponse *shared.GetImportResponse 
    InternalFailureException *interface{} 
    LimitExceededException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    
}

