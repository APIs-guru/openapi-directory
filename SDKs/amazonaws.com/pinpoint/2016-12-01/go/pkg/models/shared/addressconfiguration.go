package shared

type AddressConfiguration struct {
	BodyOverride  *string             `json:"BodyOverride"`
	ChannelType   *ChannelTypeEnum    `json:"ChannelType"`
	Context       map[string]string   `json:"Context"`
	RawContent    *string             `json:"RawContent"`
	Substitutions map[string][]string `json:"Substitutions"`
	TitleOverride *string             `json:"TitleOverride"`
}
