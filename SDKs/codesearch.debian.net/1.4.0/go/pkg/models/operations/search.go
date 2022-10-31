package operations

import (
"openapi/pkg/models/shared")


type SearchMatchModeEnum string

const (
    SearchMatchModeEnumLiteral SearchMatchModeEnum = "literal"
SearchMatchModeEnumRegexp SearchMatchModeEnum = "regexp"
)


type SearchQueryParams struct {
    MatchMode *SearchMatchModeEnum `queryParam:"style=form,explode=true,name=match_mode"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type SearchSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SearchRequest struct {
    QueryParams SearchQueryParams 
    Security SearchSecurity 
    
}

type SearchResponse struct {
    ContentType string 
    SearchResults []shared.SearchResult 
    StatusCode int64 
    
}

