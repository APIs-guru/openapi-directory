package shared

type CreateParameterGroupRequest struct {
	Description        *string `json:"Description,omitempty"`
	Family             string  `json:"Family"`
	ParameterGroupName string  `json:"ParameterGroupName"`
	Tags               []Tag   `json:"Tags,omitempty"`
}
