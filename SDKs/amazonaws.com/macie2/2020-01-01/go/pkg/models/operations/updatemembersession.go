package operations



type UpdateMemberSessionPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type UpdateMemberSessionHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateMemberSessionRequestBodyStatusEnum string

const (
    UpdateMemberSessionRequestBodyStatusEnumPaused UpdateMemberSessionRequestBodyStatusEnum = "PAUSED"
UpdateMemberSessionRequestBodyStatusEnumEnabled UpdateMemberSessionRequestBodyStatusEnum = "ENABLED"
)


type UpdateMemberSessionRequestBody struct {
    Status UpdateMemberSessionRequestBodyStatusEnum `json:"status"`
    
}

type UpdateMemberSessionRequest struct {
    PathParams UpdateMemberSessionPathParams 
    Headers UpdateMemberSessionHeaders 
    Request UpdateMemberSessionRequestBody `request:"mediaType=application/json"`
    
}

type UpdateMemberSessionResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    UpdateMemberSessionResponse map[string]interface{} 
    ValidationException *interface{} 
    
}

