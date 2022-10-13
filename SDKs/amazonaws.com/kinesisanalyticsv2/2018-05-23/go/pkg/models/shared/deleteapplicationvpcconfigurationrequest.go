package shared

type DeleteApplicationVpcConfigurationRequest struct {
	ApplicationName             string  `json:"ApplicationName"`
	ConditionalToken            *string `json:"ConditionalToken"`
	CurrentApplicationVersionID *int64  `json:"CurrentApplicationVersionId"`
	VpcConfigurationID          string  `json:"VpcConfigurationId"`
}
