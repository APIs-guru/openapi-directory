package operations

import (
"openapi/pkg/models/shared")


type UpdateArtifactRuleConfigRuleEnum string

const (
    UpdateArtifactRuleConfigRuleEnumValidity UpdateArtifactRuleConfigRuleEnum = "VALIDITY"
UpdateArtifactRuleConfigRuleEnumCompatibility UpdateArtifactRuleConfigRuleEnum = "COMPATIBILITY"
)


type UpdateArtifactRuleConfigPathParams struct {
    ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
    Rule UpdateArtifactRuleConfigRuleEnum `pathParam:"style=simple,explode=false,name=rule"`
    
}

type UpdateArtifactRuleConfigRequest struct {
    PathParams UpdateArtifactRuleConfigPathParams 
    Request shared.Rule `request:"mediaType=application/json"`
    
}

type UpdateArtifactRuleConfigResponse struct {
    ContentType string 
    Error *shared.Error 
    Rule *shared.Rule 
    StatusCode int64 
    
}

