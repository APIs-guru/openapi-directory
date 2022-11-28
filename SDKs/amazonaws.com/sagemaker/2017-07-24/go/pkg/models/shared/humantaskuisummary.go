package shared

import (
	"time"
)

// HumanTaskUISummary
// Container for human task user interface information.
type HumanTaskUISummary struct {
	CreationTime    time.Time `json:"CreationTime"`
	HumanTaskUIArn  string    `json:"HumanTaskUiArn"`
	HumanTaskUIName string    `json:"HumanTaskUiName"`
}
