package shared

// Resource
// A resource related to a finding.
type Resource struct {
	DataClassification *DataClassificationDetails `json:"DataClassification,omitempty"`
	Details            *ResourceDetails           `json:"Details,omitempty"`
	ID                 string                     `json:"Id"`
	Partition          *PartitionEnum             `json:"Partition,omitempty"`
	Region             *string                    `json:"Region,omitempty"`
	ResourceRole       *string                    `json:"ResourceRole,omitempty"`
	Tags               map[string]string          `json:"Tags,omitempty"`
	Type               string                     `json:"Type"`
}
