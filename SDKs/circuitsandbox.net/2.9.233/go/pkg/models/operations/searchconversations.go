package operations

import (
"openapi/pkg/models/shared")


type SearchConversationsScopeEnum string

const (
    SearchConversationsScopeEnumFiles SearchConversationsScopeEnum = "FILES"
SearchConversationsScopeEnumPeople SearchConversationsScopeEnum = "PEOPLE"
SearchConversationsScopeEnumMembers SearchConversationsScopeEnum = "MEMBERS"
SearchConversationsScopeEnumMessages SearchConversationsScopeEnum = "MESSAGES"
SearchConversationsScopeEnumSentby SearchConversationsScopeEnum = "SENTBY"
SearchConversationsScopeEnumAll SearchConversationsScopeEnum = "ALL"
SearchConversationsScopeEnumConversations SearchConversationsScopeEnum = "CONVERSATIONS"
SearchConversationsScopeEnumLabel SearchConversationsScopeEnum = "LABEL"
SearchConversationsScopeEnumFilter SearchConversationsScopeEnum = "FILTER"
)


type SearchConversationsQueryParams struct {
    IncludeItemIds *bool `queryParam:"style=form,explode=true,name=includeItemIds"`
    Scope *SearchConversationsScopeEnum `queryParam:"style=form,explode=true,name=scope"`
    Term string `queryParam:"style=form,explode=true,name=term"`
    
}

type SearchConversationsSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type SearchConversationsRequest struct {
    QueryParams SearchConversationsQueryParams 
    Security SearchConversationsSecurity 
    
}

type SearchConversationsResponse struct {
    Body []byte 
    ContentType string 
    ConversationSearchResult *interface{} 
    StatusCode int64 
    
}

