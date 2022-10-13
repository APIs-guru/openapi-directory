package shared

import (
	"time"
)

type SecretScanningAlert struct {
	CreatedAt  *time.Time                    `json:"created_at"`
	HTMLURL    *string                       `json:"html_url"`
	Number     *int64                        `json:"number"`
	Resolution *string                       `json:"resolution"`
	ResolvedAt *time.Time                    `json:"resolved_at"`
	ResolvedBy *SimpleUser                   `json:"resolved_by"`
	Secret     *string                       `json:"secret"`
	SecretType *string                       `json:"secret_type"`
	State      *SecretScanningAlertStateEnum `json:"state"`
	URL        *string                       `json:"url"`
}
