package shared

type ParameterGroup struct {
	Arn         *string `json:"ARN,omitempty"`
	Description *string `json:"Description,omitempty"`
	Family      *string `json:"Family,omitempty"`
	Name        *string `json:"Name,omitempty"`
}
