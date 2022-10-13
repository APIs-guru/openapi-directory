package shared

type Resources struct {
	CPU             *float64 `json:"cpu"`
	DiskGb          *float64 `json:"diskGb"`
	KmsKeyReference *string  `json:"kmsKeyReference"`
	MemoryGb        *float64 `json:"memoryGb"`
	Volumes         []Volume `json:"volumes"`
}
