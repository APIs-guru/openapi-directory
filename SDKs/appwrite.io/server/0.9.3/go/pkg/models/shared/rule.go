package shared

type Rule struct {
	DollarCollection string   `json:"$collection"`
	DollarID         string   `json:"$id"`
	Array            bool     `json:"array"`
	Default          string   `json:"default"`
	Key              string   `json:"key"`
	Label            string   `json:"label"`
	List             []string `json:"list"`
	Required         bool     `json:"required"`
	Type             string   `json:"type"`
}
