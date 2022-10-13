package shared

type ParameterGroup struct {
	Arn         *string `json:"ARN"`
	Description *string `json:"Description"`
	Family      *string `json:"Family"`
	Name        *string `json:"Name"`
}
