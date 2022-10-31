package operations

import (
"openapi/pkg/models/shared")


type DeleteArtifactRuleRuleEnum string

const (
    DeleteArtifactRuleRuleEnumValidity DeleteArtifactRuleRuleEnum = "VALIDITY"
DeleteArtifactRuleRuleEnumCompatibility DeleteArtifactRuleRuleEnum = "COMPATIBILITY"
)


type DeleteArtifactRulePathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    Rule DeleteArtifactRuleRuleEnum `pathParam:"style=simple,explode=false,name=rule"`
    
}

type DeleteArtifactRuleRequest struct {
    PathParams DeleteArtifactRulePathParams 
    
}

type DeleteArtifactRuleResponse struct {
    ContentType string 
    Error *shared.Error 
    StatusCode int64 
    
}

