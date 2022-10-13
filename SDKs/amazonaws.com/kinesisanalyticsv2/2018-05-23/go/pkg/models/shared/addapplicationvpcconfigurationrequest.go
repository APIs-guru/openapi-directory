package shared

type AddApplicationVpcConfigurationRequest struct {
	ApplicationName             string           `json:"ApplicationName"`
	ConditionalToken            *string          `json:"ConditionalToken"`
	CurrentApplicationVersionID *int64           `json:"CurrentApplicationVersionId"`
	VpcConfiguration            VpcConfiguration `json:"VpcConfiguration"`
}
