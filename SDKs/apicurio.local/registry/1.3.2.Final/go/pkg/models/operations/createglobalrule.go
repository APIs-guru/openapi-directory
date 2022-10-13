package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGlobalRuleRequest struct {
	Request shared.Rule `request:"mediaType=application/json"`
}

type CreateGlobalRuleResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
