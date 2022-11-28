package shared

import (
	"time"
)

// Patch
// Represents metadata about a patch.
type Patch struct {
	AdvisoryIds    []string   `json:"AdvisoryIds,omitempty"`
	Arch           *string    `json:"Arch,omitempty"`
	BugzillaIds    []string   `json:"BugzillaIds,omitempty"`
	CveIds         []string   `json:"CVEIds,omitempty"`
	Classification *string    `json:"Classification,omitempty"`
	ContentURL     *string    `json:"ContentUrl,omitempty"`
	Description    *string    `json:"Description,omitempty"`
	Epoch          *int64     `json:"Epoch,omitempty"`
	ID             *string    `json:"Id,omitempty"`
	KbNumber       *string    `json:"KbNumber,omitempty"`
	Language       *string    `json:"Language,omitempty"`
	MsrcNumber     *string    `json:"MsrcNumber,omitempty"`
	MsrcSeverity   *string    `json:"MsrcSeverity,omitempty"`
	Name           *string    `json:"Name,omitempty"`
	Product        *string    `json:"Product,omitempty"`
	ProductFamily  *string    `json:"ProductFamily,omitempty"`
	Release        *string    `json:"Release,omitempty"`
	ReleaseDate    *time.Time `json:"ReleaseDate,omitempty"`
	Repository     *string    `json:"Repository,omitempty"`
	Severity       *string    `json:"Severity,omitempty"`
	Title          *string    `json:"Title,omitempty"`
	Vendor         *string    `json:"Vendor,omitempty"`
	Version        *string    `json:"Version,omitempty"`
}
