package operations

import (
"openapi/pkg/models/shared")


type SearchArtifactsOrderEnum string

const (
    SearchArtifactsOrderEnumAsc SearchArtifactsOrderEnum = "asc"
SearchArtifactsOrderEnumDesc SearchArtifactsOrderEnum = "desc"
)



type SearchArtifactsOverEnum string

const (
    SearchArtifactsOverEnumEverything SearchArtifactsOverEnum = "everything"
SearchArtifactsOverEnumName SearchArtifactsOverEnum = "name"
SearchArtifactsOverEnumDescription SearchArtifactsOverEnum = "description"
SearchArtifactsOverEnumLabels SearchArtifactsOverEnum = "labels"
)


type SearchArtifactsQueryParams struct {
    Limit int64 `queryParam:"style=form,explode=true,name=limit"`
    Offset int64 `queryParam:"style=form,explode=true,name=offset"`
    Order *SearchArtifactsOrderEnum `queryParam:"style=form,explode=true,name=order"`
    Over *SearchArtifactsOverEnum `queryParam:"style=form,explode=true,name=over"`
    Search *string `queryParam:"style=form,explode=true,name=search"`
    
}

type SearchArtifactsRequest struct {
    QueryParams SearchArtifactsQueryParams 
    
}

type SearchArtifactsResponse struct {
    ArtifactSearchResults *shared.ArtifactSearchResults 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

