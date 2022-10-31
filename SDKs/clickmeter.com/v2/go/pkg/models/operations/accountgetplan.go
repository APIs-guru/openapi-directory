package operations

import (
	"openapi/pkg/models/shared"
)

type AccountGetPlanResponse struct {
	APICoreDtoAccountingPlan *shared.APICoreDtoAccountingPlan
	Body                     []byte
	ContentType              string
	StatusCode               int64
}
