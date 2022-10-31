package operations

import (
"openapi/pkg/models/shared")

type DeleteArtifactRulesPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    
}

type DeleteArtifactRulesRequest struct {
    PathParams DeleteArtifactRulesPathParams 
    
}

type DeleteArtifactRulesResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

