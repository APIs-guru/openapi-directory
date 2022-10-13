package shared

type DescribeJobResult struct {
	JobMetadata    *JobMetadata  `json:"JobMetadata"`
	SubJobMetadata []JobMetadata `json:"SubJobMetadata"`
}
