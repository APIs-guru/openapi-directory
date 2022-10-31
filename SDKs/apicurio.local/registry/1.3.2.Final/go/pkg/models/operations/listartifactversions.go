package operations

import (
"openapi/pkg/models/shared")

type ListArtifactVersionsPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}

type ListArtifactVersionsRequest struct {
    PathParams ListArtifactVersionsPathParams 
    
}

type ListArtifactVersionsResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    ListArtifactVersions200ApplicationJSONInt64Integers []int64 
    
}

