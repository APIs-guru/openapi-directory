package shared

type PutParameterRequest struct {
	AllowedPattern *string            `json:"AllowedPattern,omitempty"`
	DataType       *string            `json:"DataType,omitempty"`
	Description    *string            `json:"Description,omitempty"`
	KeyID          *string            `json:"KeyId,omitempty"`
	Name           string             `json:"Name"`
	Overwrite      *bool              `json:"Overwrite,omitempty"`
	Policies       *string            `json:"Policies,omitempty"`
	Tags           []Tag              `json:"Tags,omitempty"`
	Tier           *ParameterTierEnum `json:"Tier,omitempty"`
	Type           *ParameterTypeEnum `json:"Type,omitempty"`
	Value          string             `json:"Value"`
}
