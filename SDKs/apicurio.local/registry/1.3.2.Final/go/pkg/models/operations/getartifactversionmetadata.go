package operations

import (
"openapi/pkg/models/shared")

type GetArtifactVersionMetaDataPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    Version int64 `pathParam:"style=simple,explode=false,name=version"`
    
}

type GetArtifactVersionMetaDataRequest struct {
    PathParams GetArtifactVersionMetaDataPathParams 
    
}

type GetArtifactVersionMetaDataResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    VersionMetaData *shared.VersionMetaData 
    
}

