package operations



type AssociateLensesPathParams struct {
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type AssociateLensesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type AssociateLensesRequestBody struct {
    LensAliases []string `json:"LensAliases"`
    
}

type AssociateLensesRequest struct {
    PathParams AssociateLensesPathParams 
    Headers AssociateLensesHeaders 
    Request AssociateLensesRequestBody `request:"mediaType=application/json"`
    
}

type AssociateLensesResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

