package shared

import (
	"time"
)

type ValidationOutput struct {
	AppValidationOutput    *AppValidationOutput    `json:"appValidationOutput"`
	LatestValidationTime   *time.Time              `json:"latestValidationTime"`
	Name                   *string                 `json:"name"`
	ServerValidationOutput *ServerValidationOutput `json:"serverValidationOutput"`
	Status                 *ValidationStatusEnum   `json:"status"`
	StatusMessage          *string                 `json:"statusMessage"`
	ValidationID           *string                 `json:"validationId"`
}
