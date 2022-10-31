package operations

import (
	"openapi/pkg/models/shared"
)

type GetArtifactRuleConfigRuleEnum string

const (
	GetArtifactRuleConfigRuleEnumValidity      GetArtifactRuleConfigRuleEnum = "VALIDITY"
	GetArtifactRuleConfigRuleEnumCompatibility GetArtifactRuleConfigRuleEnum = "COMPATIBILITY"
)

type GetArtifactRuleConfigPathParams struct {
	ArtifactID string                        `pathParam:"style=simple,explode=false,name=artifactId"`
	Rule       GetArtifactRuleConfigRuleEnum `pathParam:"style=simple,explode=false,name=rule"`
}

type GetArtifactRuleConfigRequest struct {
	PathParams GetArtifactRuleConfigPathParams
}

type GetArtifactRuleConfigResponse struct {
	ContentType string
	Error       *shared.Error
	Rule        *shared.Rule
	StatusCode  int64
}
