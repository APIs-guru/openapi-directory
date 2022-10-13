package operations

import (
	"openapi/pkg/models/shared"
)

type MeGetMePlanResponse struct {
	APICoreDtoAccountingPlan *shared.APICoreDtoAccountingPlan
	Body                     []byte
	ContentType              string
	StatusCode               int64
}
