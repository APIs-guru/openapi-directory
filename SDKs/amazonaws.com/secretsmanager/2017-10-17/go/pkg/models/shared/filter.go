package shared

type Filter struct {
	Key    *FilterNameStringTypeEnum `json:"Key,omitempty"`
	Values []string                  `json:"Values,omitempty"`
}
