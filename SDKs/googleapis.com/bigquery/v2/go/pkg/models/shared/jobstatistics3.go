package shared

type JobStatistics3 struct {
	BadRecords     *string `json:"badRecords"`
	InputFileBytes *string `json:"inputFileBytes"`
	InputFiles     *string `json:"inputFiles"`
	OutputBytes    *string `json:"outputBytes"`
	OutputRows     *string `json:"outputRows"`
}
