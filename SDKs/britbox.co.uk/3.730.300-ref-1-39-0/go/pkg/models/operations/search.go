package operations

import (
"openapi/pkg/models/shared")


type SearchIncludeEnum string

const (
    SearchIncludeEnumTv SearchIncludeEnum = "tv"
SearchIncludeEnumMovies SearchIncludeEnum = "movies"
SearchIncludeEnumPeople SearchIncludeEnum = "people"
SearchIncludeEnumOther SearchIncludeEnum = "other"
)


type SearchQueryParams struct {
    Device *string `queryParam:"style=form,explode=true,name=device"`
    Ff []shared.FeatureFlagsEnum `queryParam:"style=form,explode=false,name=ff"`
    Group *bool `queryParam:"style=form,explode=true,name=group"`
    Include []SearchIncludeEnum `queryParam:"style=form,explode=false,name=include"`
    Lang *string `queryParam:"style=form,explode=true,name=lang"`
    MaxRating *string `queryParam:"style=form,explode=true,name=max_rating"`
    MaxResults *int32 `queryParam:"style=form,explode=true,name=max_results"`
    Segments []string `queryParam:"style=form,explode=false,name=segments"`
    Sub *string `queryParam:"style=form,explode=true,name=sub"`
    Term string `queryParam:"style=form,explode=true,name=term"`
    
}

type SearchRequest struct {
    QueryParams SearchQueryParams 
    
}

type SearchResponse struct {
    ContentType string 
    SearchResults *shared.SearchResults 
    ServiceError *shared.ServiceError 
    StatusCode int64 
    
}

