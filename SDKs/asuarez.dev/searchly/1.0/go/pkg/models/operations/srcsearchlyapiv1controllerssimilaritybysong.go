package operations

import (
"openapi/pkg/models/shared")

type SrcSearchlyAPIV1ControllersSimilarityBySongQueryParams struct {
    SongID int64 `queryParam:"style=form,explode=true,name=song_id"`
    
}

type SrcSearchlyAPIV1ControllersSimilarityBySongRequest struct {
    QueryParams SrcSearchlyAPIV1ControllersSimilarityBySongQueryParams 
    
}

type SrcSearchlyAPIV1ControllersSimilarityBySongResponse struct {
    APIResponseSimilarity *shared.APIResponseSimilarity 
    ContentType string 
    StatusCode int64 
    SrcSearchlyAPIV1ControllersSimilarityBySongDefaultApplicationTextString *string 
    
}

