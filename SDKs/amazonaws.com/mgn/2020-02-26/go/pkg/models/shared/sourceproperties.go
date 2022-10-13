package shared

type SourceProperties struct {
	Cpus                    []CPU                `json:"cpus"`
	Disks                   []Disk               `json:"disks"`
	IdentificationHints     *IdentificationHints `json:"identificationHints"`
	LastUpdatedDateTime     *string              `json:"lastUpdatedDateTime"`
	NetworkInterfaces       []NetworkInterface   `json:"networkInterfaces"`
	Os                      *Os                  `json:"os"`
	RAMBytes                *int64               `json:"ramBytes"`
	RecommendedInstanceType *string              `json:"recommendedInstanceType"`
}
