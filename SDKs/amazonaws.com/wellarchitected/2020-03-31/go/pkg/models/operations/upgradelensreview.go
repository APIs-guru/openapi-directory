package operations



type UpgradeLensReviewPathParams struct {
    LensAlias string `pathParam:"style=simple,explode=false,name=LensAlias"`
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type UpgradeLensReviewHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type UpgradeLensReviewRequestBody struct {
    ClientRequestToken *string `json:"ClientRequestToken,omitempty"`
    MilestoneName string `json:"MilestoneName"`
    
}

type UpgradeLensReviewRequest struct {
    PathParams UpgradeLensReviewPathParams 
    Headers UpgradeLensReviewHeaders 
    Request UpgradeLensReviewRequestBody `request:"mediaType=application/json"`
    
}

type UpgradeLensReviewResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

