package shared

type ResetParameterGroupRequest struct {
	AllParameters      *bool    `json:"AllParameters,omitempty"`
	ParameterGroupName string   `json:"ParameterGroupName"`
	ParameterNames     []string `json:"ParameterNames,omitempty"`
}
