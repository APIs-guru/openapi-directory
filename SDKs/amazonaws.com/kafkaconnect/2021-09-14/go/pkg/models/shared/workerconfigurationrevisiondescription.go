package shared

import (
	"time"
)

// WorkerConfigurationRevisionDescription
// The description of the worker configuration revision.
type WorkerConfigurationRevisionDescription struct {
	CreationTime          *time.Time `json:"creationTime,omitempty"`
	Description           *string    `json:"description,omitempty"`
	PropertiesFileContent *string    `json:"propertiesFileContent,omitempty"`
	Revision              *int64     `json:"revision,omitempty"`
}
