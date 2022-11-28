package shared

import (
	"time"
)

// AssociationStatus
// Describes an association status.
type AssociationStatus struct {
	AdditionalInfo *string                   `json:"AdditionalInfo,omitempty"`
	Date           time.Time                 `json:"Date"`
	Message        string                    `json:"Message"`
	Name           AssociationStatusNameEnum `json:"Name"`
}
