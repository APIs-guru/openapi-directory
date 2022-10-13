package shared

type PretargetingConfigList struct {
	Items []PretargetingConfig `json:"items"`
	Kind  *string              `json:"kind"`
}
