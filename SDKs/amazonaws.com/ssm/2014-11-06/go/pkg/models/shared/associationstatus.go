package shared

import (
	"time"
)

type AssociationStatus struct {
	AdditionalInfo *string                   `json:"AdditionalInfo,omitempty"`
	Date           time.Time                 `json:"Date"`
	Message        string                    `json:"Message"`
	Name           AssociationStatusNameEnum `json:"Name"`
}
