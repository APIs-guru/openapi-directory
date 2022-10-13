package shared

type ParameterConstraints struct {
	AllowedPattern        *string  `json:"AllowedPattern"`
	AllowedValues         []string `json:"AllowedValues"`
	ConstraintDescription *string  `json:"ConstraintDescription"`
	MaxLength             *string  `json:"MaxLength"`
	MaxValue              *string  `json:"MaxValue"`
	MinLength             *string  `json:"MinLength"`
	MinValue              *string  `json:"MinValue"`
}
