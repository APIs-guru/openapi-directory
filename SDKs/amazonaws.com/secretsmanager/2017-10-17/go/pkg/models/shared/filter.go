package shared

type Filter struct {
	Key    *FilterNameStringTypeEnum `json:"Key"`
	Values []string                  `json:"Values"`
}
