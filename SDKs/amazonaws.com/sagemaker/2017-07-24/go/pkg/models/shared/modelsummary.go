package shared

import (
	"time"
)

// ModelSummary
// Provides summary information about a model.
type ModelSummary struct {
	CreationTime time.Time `json:"CreationTime"`
	ModelArn     string    `json:"ModelArn"`
	ModelName    string    `json:"ModelName"`
}
