package shared

type PutParameterRequest struct {
	AllowedPattern *string            `json:"AllowedPattern"`
	DataType       *string            `json:"DataType"`
	Description    *string            `json:"Description"`
	KeyID          *string            `json:"KeyId"`
	Name           string             `json:"Name"`
	Overwrite      *bool              `json:"Overwrite"`
	Policies       *string            `json:"Policies"`
	Tags           []Tag              `json:"Tags"`
	Tier           *ParameterTierEnum `json:"Tier"`
	Type           *ParameterTypeEnum `json:"Type"`
	Value          string             `json:"Value"`
}
