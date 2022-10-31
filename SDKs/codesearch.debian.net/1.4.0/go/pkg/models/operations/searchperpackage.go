package operations

import (
"openapi/pkg/models/shared")


type SearchperpackageMatchModeEnum string

const (
    SearchperpackageMatchModeEnumLiteral SearchperpackageMatchModeEnum = "literal"
SearchperpackageMatchModeEnumRegexp SearchperpackageMatchModeEnum = "regexp"
)


type SearchperpackageQueryParams struct {
    MatchMode *SearchperpackageMatchModeEnum `queryParam:"style=form,explode=true,name=match_mode"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type SearchperpackageSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type SearchperpackageRequest struct {
    QueryParams SearchperpackageQueryParams 
    Security SearchperpackageSecurity 
    
}

type SearchperpackageResponse struct {
    ContentType string 
    PackageSearchResults []shared.PackageSearchResult 
    StatusCode int64 
    
}

