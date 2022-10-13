package shared

import (
	"time"
)

type ModelSummary struct {
	CreationTime time.Time `json:"CreationTime"`
	ModelArn     string    `json:"ModelArn"`
	ModelName    string    `json:"ModelName"`
}
