package shared

type ExplainQueryStep struct {
	Kind     *string  `json:"kind"`
	Substeps []string `json:"substeps"`
}
