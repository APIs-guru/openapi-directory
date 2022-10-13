package shared

type InvalidParameterValueException struct {
	Type    *string `json:"Type"`
	Message *string `json:"message"`
}
