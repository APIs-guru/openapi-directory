package operations

import (
"openapi/pkg/models/shared")

type GetArtifactMetaDataPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}

type GetArtifactMetaDataRequest struct {
    PathParams GetArtifactMetaDataPathParams 
    
}

type GetArtifactMetaDataResponse struct {
    ArtifactMetaData *shared.ArtifactMetaData 
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

