package shared

type JobStatistics3 struct {
	BadRecords     *string `json:"badRecords,omitempty"`
	InputFileBytes *string `json:"inputFileBytes,omitempty"`
	InputFiles     *string `json:"inputFiles,omitempty"`
	OutputBytes    *string `json:"outputBytes,omitempty"`
	OutputRows     *string `json:"outputRows,omitempty"`
}
