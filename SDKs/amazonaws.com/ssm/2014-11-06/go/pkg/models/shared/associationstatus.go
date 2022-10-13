package shared

import (
	"time"
)

type AssociationStatus struct {
	AdditionalInfo *string                   `json:"AdditionalInfo"`
	Date           time.Time                 `json:"Date"`
	Message        string                    `json:"Message"`
	Name           AssociationStatusNameEnum `json:"Name"`
}
