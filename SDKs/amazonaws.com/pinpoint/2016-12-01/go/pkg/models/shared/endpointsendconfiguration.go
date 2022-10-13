package shared

type EndpointSendConfiguration struct {
	BodyOverride  *string             `json:"BodyOverride"`
	Context       map[string]string   `json:"Context"`
	RawContent    *string             `json:"RawContent"`
	Substitutions map[string][]string `json:"Substitutions"`
	TitleOverride *string             `json:"TitleOverride"`
}
