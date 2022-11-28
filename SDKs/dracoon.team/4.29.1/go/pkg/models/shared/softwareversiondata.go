package shared

import (
	"time"
)

// SoftwareVersionData
// Software version information
type SoftwareVersionData struct {
	BuildDate         time.Time `json:"buildDate"`
	IsDracoonCloud    *bool     `json:"isDracoonCloud,omitempty"`
	RestAPIVersion    string    `json:"restApiVersion"`
	ScmRevisionNumber string    `json:"scmRevisionNumber"`
	SdsServerVersion  string    `json:"sdsServerVersion"`
}
