package shared

import (
	"time"
)

type WorkerConfigurationRevisionDescription struct {
	CreationTime          *time.Time `json:"creationTime"`
	Description           *string    `json:"description"`
	PropertiesFileContent *string    `json:"propertiesFileContent"`
	Revision              *int64     `json:"revision"`
}
