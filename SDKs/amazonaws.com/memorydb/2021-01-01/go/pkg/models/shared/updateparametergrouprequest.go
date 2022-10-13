package shared

type UpdateParameterGroupRequest struct {
	ParameterGroupName  string               `json:"ParameterGroupName"`
	ParameterNameValues []ParameterNameValue `json:"ParameterNameValues"`
}
