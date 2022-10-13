package shared

type Parameter struct {
	AllowedValues        *string `json:"AllowedValues"`
	DataType             *string `json:"DataType"`
	Description          *string `json:"Description"`
	MinimumEngineVersion *string `json:"MinimumEngineVersion"`
	Name                 *string `json:"Name"`
	Value                *string `json:"Value"`
}
