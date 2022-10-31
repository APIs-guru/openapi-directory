package operations



type UpdateStandardsControlPathParams struct {
    StandardsControlArn string `pathParam:"style=simple,explode=false,name=StandardsControlArn"`
    
}

type UpdateStandardsControlHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}


type UpdateStandardsControlRequestBodyControlStatusEnum string

const (
    UpdateStandardsControlRequestBodyControlStatusEnumEnabled UpdateStandardsControlRequestBodyControlStatusEnum = "ENABLED"
UpdateStandardsControlRequestBodyControlStatusEnumDisabled UpdateStandardsControlRequestBodyControlStatusEnum = "DISABLED"
)


type UpdateStandardsControlRequestBody struct {
    ControlStatus *UpdateStandardsControlRequestBodyControlStatusEnum `json:"ControlStatus,omitempty"`
    DisabledReason *string `json:"DisabledReason,omitempty"`
    
}

type UpdateStandardsControlRequest struct {
    PathParams UpdateStandardsControlPathParams 
    Headers UpdateStandardsControlHeaders 
    Request UpdateStandardsControlRequestBody `request:"mediaType=application/json"`
    
}

type UpdateStandardsControlResponse struct {
    ContentType string 
    InternalException *interface{} 
    InvalidAccessException *interface{} 
    InvalidInputException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    UpdateStandardsControlResponse map[string]interface{} 
    
}

