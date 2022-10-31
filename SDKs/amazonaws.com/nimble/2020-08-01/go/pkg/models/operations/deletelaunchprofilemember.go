package operations



type DeleteLaunchProfileMemberPathParams struct {
    LaunchProfileID string `pathParam:"style=simple,explode=false,name=launchProfileId"`
    PrincipalID string `pathParam:"style=simple,explode=false,name=principalId"`
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type DeleteLaunchProfileMemberHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzClientToken *string `header:"style=simple,explode=false,name=X-Amz-Client-Token"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type DeleteLaunchProfileMemberRequest struct {
    PathParams DeleteLaunchProfileMemberPathParams 
    Headers DeleteLaunchProfileMemberHeaders 
    
}

type DeleteLaunchProfileMemberResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    DeleteLaunchProfileMemberResponse map[string]interface{} 
    InternalServerErrorException *interface{} 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

