package shared

type SamplingRule struct {
	Attributes    map[string]string `json:"Attributes,omitempty"`
	FixedRate     float64           `json:"FixedRate"`
	HTTPMethod    string            `json:"HTTPMethod"`
	Host          string            `json:"Host"`
	Priority      int64             `json:"Priority"`
	ReservoirSize int64             `json:"ReservoirSize"`
	ResourceArn   string            `json:"ResourceARN"`
	RuleArn       *string           `json:"RuleARN,omitempty"`
	RuleName      *string           `json:"RuleName,omitempty"`
	ServiceName   string            `json:"ServiceName"`
	ServiceType   string            `json:"ServiceType"`
	URLPath       string            `json:"URLPath"`
	Version       int64             `json:"Version"`
}
