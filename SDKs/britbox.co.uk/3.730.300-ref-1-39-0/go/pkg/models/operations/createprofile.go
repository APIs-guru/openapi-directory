package operations

import (
"openapi/pkg/models/shared")

type CreateProfileQueryParams struct {
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    
}

type CreateProfileSecurity struct {
    AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
    
}

type CreateProfileRequest struct {
    QueryParams CreateProfileQueryParams 
    Request shared.ProfileCreationRequest `request:"mediaType=application/json"`
    Security CreateProfileSecurity 
    
}

type CreateProfileResponse struct {
    ContentType string 
    ProfileDetail *shared.ProfileDetail 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

