package shared

type SystemInstanceFilter struct {
	Name  *SystemInstanceFilterNameEnum `json:"name,omitempty"`
	Value []string                      `json:"value,omitempty"`
}
