package operations

import (
"openapi/pkg/models/shared")


type GetParametersForImportXAmzTargetEnum string

const (
    GetParametersForImportXAmzTargetEnumTrentServiceGetParametersForImport GetParametersForImportXAmzTargetEnum = "TrentService.GetParametersForImport"
)


type GetParametersForImportHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    XAmzTarget GetParametersForImportXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
    
}

type GetParametersForImportRequest struct {
    Headers GetParametersForImportHeaders 
    Request shared.GetParametersForImportRequest `request:"mediaType=application/json"`
    
}

type GetParametersForImportResponse struct {
    ContentType string 
    DependencyTimeoutException *interface{} 
    GetParametersForImportResponse *shared.GetParametersForImportResponse 
    InvalidArnException *interface{} 
    KmsInternalException *interface{} 
    KmsInvalidStateException *interface{} 
    NotFoundException *interface{} 
    StatusCode int64 
    UnsupportedOperationException *interface{} 
    
}

