package shared

// SourceProperties
// Source server properties.
type SourceProperties struct {
	Cpus                    []CPU                `json:"cpus,omitempty"`
	Disks                   []Disk               `json:"disks,omitempty"`
	IdentificationHints     *IdentificationHints `json:"identificationHints,omitempty"`
	LastUpdatedDateTime     *string              `json:"lastUpdatedDateTime,omitempty"`
	NetworkInterfaces       []NetworkInterface   `json:"networkInterfaces,omitempty"`
	Os                      *Os                  `json:"os,omitempty"`
	RAMBytes                *int64               `json:"ramBytes,omitempty"`
	RecommendedInstanceType *string              `json:"recommendedInstanceType,omitempty"`
}
