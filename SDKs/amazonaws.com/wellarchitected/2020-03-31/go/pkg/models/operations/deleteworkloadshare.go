package operations



type DeleteWorkloadSharePathParams struct {
    ShareID string `pathParam:"style=simple,explode=false,name=ShareId"`
    WorkloadID string `pathParam:"style=simple,explode=false,name=WorkloadId"`
    
}

type DeleteWorkloadShareQueryParams struct {
    ClientRequestToken string `queryParam:"style=form,explode=true,name=ClientRequestToken"`
    
}

type DeleteWorkloadShareHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteWorkloadShareRequest struct {
    PathParams DeleteWorkloadSharePathParams 
    QueryParams DeleteWorkloadShareQueryParams 
    Headers DeleteWorkloadShareHeaders 
    
}

type DeleteWorkloadShareResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerException *interface{} 
    ResourceNotFoundException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

