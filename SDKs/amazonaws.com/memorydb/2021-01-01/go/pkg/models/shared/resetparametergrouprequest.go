package shared

type ResetParameterGroupRequest struct {
	AllParameters      *bool    `json:"AllParameters"`
	ParameterGroupName string   `json:"ParameterGroupName"`
	ParameterNames     []string `json:"ParameterNames"`
}
