package shared

import (
	"time"
)

// ValidationOutput
// Contains validation output.
type ValidationOutput struct {
	AppValidationOutput    *AppValidationOutput    `json:"appValidationOutput,omitempty"`
	LatestValidationTime   *time.Time              `json:"latestValidationTime,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	ServerValidationOutput *ServerValidationOutput `json:"serverValidationOutput,omitempty"`
	Status                 *ValidationStatusEnum   `json:"status,omitempty"`
	StatusMessage          *string                 `json:"statusMessage,omitempty"`
	ValidationID           *string                 `json:"validationId,omitempty"`
}
