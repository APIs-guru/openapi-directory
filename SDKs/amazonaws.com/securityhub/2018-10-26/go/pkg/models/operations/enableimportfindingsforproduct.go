package operations

import (
"openapi/pkg/models/shared")

type EnableImportFindingsForProductHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type EnableImportFindingsForProductRequestBody struct {
    ProductArn string `json:"ProductArn"`
    
}

type EnableImportFindingsForProductRequest struct {
    Headers EnableImportFindingsForProductHeaders 
    Request EnableImportFindingsForProductRequestBody `request:"mediaType=application/json"`
    
}

type EnableImportFindingsForProductResponse struct {
    ContentType string 
    EnableImportFindingsForProductResponse *shared.EnableImportFindingsForProductResponse 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    LimitExceededException *interface{} 
    ResourceConflictException *interface{} 
    StatusCode int64 
    
}

