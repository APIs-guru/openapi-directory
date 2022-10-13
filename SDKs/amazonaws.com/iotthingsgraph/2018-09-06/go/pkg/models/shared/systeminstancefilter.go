package shared

type SystemInstanceFilter struct {
	Name  *SystemInstanceFilterNameEnum `json:"name"`
	Value []string                      `json:"value"`
}
