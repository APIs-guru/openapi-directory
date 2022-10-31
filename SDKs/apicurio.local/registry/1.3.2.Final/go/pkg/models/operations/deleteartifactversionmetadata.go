package operations

import (
"openapi/pkg/models/shared")

type DeleteArtifactVersionMetaDataPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    Version int64 `pathParam:"style=simple,explode=false,name=version"`
    
}

type DeleteArtifactVersionMetaDataRequest struct {
    PathParams DeleteArtifactVersionMetaDataPathParams 
    
}

type DeleteArtifactVersionMetaDataResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

