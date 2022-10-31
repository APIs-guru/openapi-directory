package operations

import (
"openapi/pkg/models/shared")

type ListLaunchProfilesPathParams struct {
    StudioID string `pathParam:"style=simple,explode=false,name=studioId"`
    
}

type ListLaunchProfilesQueryParams struct {
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    NextToken *string `queryParam:"style=form,explode=true,name=nextToken"`
    PrincipalID *string `queryParam:"style=form,explode=true,name=principalId"`
    States []string `queryParam:"style=form,explode=true,name=states"`
    
}

type ListLaunchProfilesHeaders struct {
    XAmzAlgorithm *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
    XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
    XAmzCredential *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
    XAmzDate *string `header:"style=simple,explode=false,name=X-Amz-Date"`
    XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
    XAmzSignature *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
    XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
    
}

type ListLaunchProfilesRequest struct {
    PathParams ListLaunchProfilesPathParams 
    QueryParams ListLaunchProfilesQueryParams 
    Headers ListLaunchProfilesHeaders 
    
}

type ListLaunchProfilesResponse struct {
    AccessDeniedException *interface{} 
    ConflictException *interface{} 
    ContentType string 
    InternalServerErrorException *interface{} 
    ListLaunchProfilesResponse *shared.ListLaunchProfilesResponse 
    ResourceNotFoundException *interface{} 
    ServiceQuotaExceededException *interface{} 
    StatusCode int64 
    ThrottlingException *interface{} 
    ValidationException *interface{} 
    
}

