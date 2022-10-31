package operations

import (
"time"
"openapi/pkg/models/shared")


type StartBasicSpacesSearchScopeEnum string

const (
    StartBasicSpacesSearchScopeEnumAll StartBasicSpacesSearchScopeEnum = "ALL"
StartBasicSpacesSearchScopeEnumSpaces StartBasicSpacesSearchScopeEnum = "SPACES"
StartBasicSpacesSearchScopeEnumTopicby StartBasicSpacesSearchScopeEnum = "TOPICBY"
StartBasicSpacesSearchScopeEnumFiles StartBasicSpacesSearchScopeEnum = "FILES"
StartBasicSpacesSearchScopeEnumTags StartBasicSpacesSearchScopeEnum = "TAGS"
StartBasicSpacesSearchScopeEnumLabels StartBasicSpacesSearchScopeEnum = "LABELS"
StartBasicSpacesSearchScopeEnumDate StartBasicSpacesSearchScopeEnum = "DATE"
)


type StartBasicSpacesSearchQueryParams struct {
    EndTime *time.Time `queryParam:"style=form,explode=true,name=endTime"`
    PrioritySpaces []string `queryParam:"style=form,explode=true,name=prioritySpaces"`
    Scope StartBasicSpacesSearchScopeEnum `queryParam:"style=form,explode=true,name=scope"`
    SearchTerm string `queryParam:"style=form,explode=true,name=searchTerm"`
    StartTime *time.Time `queryParam:"style=form,explode=true,name=startTime"`
    
}

type StartBasicSpacesSearchSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type StartBasicSpacesSearchRequest struct {
    QueryParams StartBasicSpacesSearchQueryParams 
    Security StartBasicSpacesSearchSecurity 
    
}

type StartBasicSpacesSearchResponse struct {
    BasicSearchResult *interface{} 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

