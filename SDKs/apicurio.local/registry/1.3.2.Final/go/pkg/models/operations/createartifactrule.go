package operations

import (
	"openapi/pkg/models/shared"
)

type CreateArtifactRulePathParams struct {
	ArtifactID string `pathParam:"style=simple,explode=false,name=artifactId"`
}

type CreateArtifactRuleRequest struct {
	PathParams CreateArtifactRulePathParams
	Request    shared.Rule `request:"mediaType=application/json"`
}

type CreateArtifactRuleResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
