package shared

type Resource struct {
	DataClassification *DataClassificationDetails `json:"DataClassification"`
	Details            *ResourceDetails           `json:"Details"`
	ID                 string                     `json:"Id"`
	Partition          *PartitionEnum             `json:"Partition"`
	Region             *string                    `json:"Region"`
	ResourceRole       *string                    `json:"ResourceRole"`
	Tags               map[string]string          `json:"Tags"`
	Type               string                     `json:"Type"`
}
