package operations

import (
"time"
"openapi/pkg/models/shared")


type StartDetailedSpaceSearchScopeEnum string

const (
    StartDetailedSpaceSearchScopeEnumAll StartDetailedSpaceSearchScopeEnum = "ALL"
StartDetailedSpaceSearchScopeEnumSpaces StartDetailedSpaceSearchScopeEnum = "SPACES"
StartDetailedSpaceSearchScopeEnumTopicby StartDetailedSpaceSearchScopeEnum = "TOPICBY"
StartDetailedSpaceSearchScopeEnumFiles StartDetailedSpaceSearchScopeEnum = "FILES"
StartDetailedSpaceSearchScopeEnumTags StartDetailedSpaceSearchScopeEnum = "TAGS"
StartDetailedSpaceSearchScopeEnumLabels StartDetailedSpaceSearchScopeEnum = "LABELS"
StartDetailedSpaceSearchScopeEnumDate StartDetailedSpaceSearchScopeEnum = "DATE"
)


type StartDetailedSpaceSearchQueryParams struct {
    EndTime *time.Time `queryParam:"style=form,explode=true,name=endTime"`
    Scope StartDetailedSpaceSearchScopeEnum `queryParam:"style=form,explode=true,name=scope"`
    SearchID *string `queryParam:"style=form,explode=true,name=searchId"`
    SearchTerm string `queryParam:"style=form,explode=true,name=searchTerm"`
    SpaceID string `queryParam:"style=form,explode=true,name=spaceId"`
    StartTime *time.Time `queryParam:"style=form,explode=true,name=startTime"`
    
}

type StartDetailedSpaceSearchSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type StartDetailedSpaceSearchRequest struct {
    QueryParams StartDetailedSpaceSearchQueryParams 
    Security StartDetailedSpaceSearchSecurity 
    
}

type StartDetailedSpaceSearchResponse struct {
    Body []byte 
    ContentType string 
    SpaceSearchResultDetailedBacks []interface{} 
    StatusCode int64 
    
}

