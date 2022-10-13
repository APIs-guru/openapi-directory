package shared

type Cvss struct {
	Adjustments []Adjustment `json:"Adjustments"`
	BaseScore   *float64     `json:"BaseScore"`
	BaseVector  *string      `json:"BaseVector"`
	Source      *string      `json:"Source"`
	Version     *string      `json:"Version"`
}
