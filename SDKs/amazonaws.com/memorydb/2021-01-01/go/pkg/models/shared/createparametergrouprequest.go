package shared

type CreateParameterGroupRequest struct {
	Description        *string `json:"Description"`
	Family             string  `json:"Family"`
	ParameterGroupName string  `json:"ParameterGroupName"`
	Tags               []Tag   `json:"Tags"`
}
