package shared

import (
	"time"
)

type PatchComplianceData struct {
	CveIds         *string                      `json:"CVEIds"`
	Classification string                       `json:"Classification"`
	InstalledTime  time.Time                    `json:"InstalledTime"`
	KbID           string                       `json:"KBId"`
	Severity       string                       `json:"Severity"`
	State          PatchComplianceDataStateEnum `json:"State"`
	Title          string                       `json:"Title"`
}
