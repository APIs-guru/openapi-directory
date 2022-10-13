package shared

import (
	"time"
)

type CodeScanningAlert struct {
	CreatedAt          time.Time                  `json:"created_at"`
	DismissedAt        time.Time                  `json:"dismissed_at"`
	DismissedBy        SimpleUser                 `json:"dismissed_by"`
	DismissedReason    string                     `json:"dismissed_reason"`
	HTMLURL            string                     `json:"html_url"`
	InstancesURL       string                     `json:"instances_url"`
	MostRecentInstance CodeScanningAlertInstance  `json:"most_recent_instance"`
	Number             int64                      `json:"number"`
	Rule               CodeScanningAlertRule      `json:"rule"`
	State              CodeScanningAlertStateEnum `json:"state"`
	Tool               CodeScanningAnalysisTool   `json:"tool"`
	URL                string                     `json:"url"`
}
