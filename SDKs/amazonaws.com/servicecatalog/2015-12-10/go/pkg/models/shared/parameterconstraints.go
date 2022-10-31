package shared

type ParameterConstraints struct {
	AllowedPattern        *string  `json:"AllowedPattern,omitempty"`
	AllowedValues         []string `json:"AllowedValues,omitempty"`
	ConstraintDescription *string  `json:"ConstraintDescription,omitempty"`
	MaxLength             *string  `json:"MaxLength,omitempty"`
	MaxValue              *string  `json:"MaxValue,omitempty"`
	MinLength             *string  `json:"MinLength,omitempty"`
	MinValue              *string  `json:"MinValue,omitempty"`
}
