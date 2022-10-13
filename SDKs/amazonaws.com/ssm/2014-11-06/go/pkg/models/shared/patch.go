package shared

import (
	"time"
)

type Patch struct {
	AdvisoryIds    []string   `json:"AdvisoryIds"`
	Arch           *string    `json:"Arch"`
	BugzillaIds    []string   `json:"BugzillaIds"`
	CveIds         []string   `json:"CVEIds"`
	Classification *string    `json:"Classification"`
	ContentURL     *string    `json:"ContentUrl"`
	Description    *string    `json:"Description"`
	Epoch          *int64     `json:"Epoch"`
	ID             *string    `json:"Id"`
	KbNumber       *string    `json:"KbNumber"`
	Language       *string    `json:"Language"`
	MsrcNumber     *string    `json:"MsrcNumber"`
	MsrcSeverity   *string    `json:"MsrcSeverity"`
	Name           *string    `json:"Name"`
	Product        *string    `json:"Product"`
	ProductFamily  *string    `json:"ProductFamily"`
	Release        *string    `json:"Release"`
	ReleaseDate    *time.Time `json:"ReleaseDate"`
	Repository     *string    `json:"Repository"`
	Severity       *string    `json:"Severity"`
	Title          *string    `json:"Title"`
	Vendor         *string    `json:"Vendor"`
	Version        *string    `json:"Version"`
}
