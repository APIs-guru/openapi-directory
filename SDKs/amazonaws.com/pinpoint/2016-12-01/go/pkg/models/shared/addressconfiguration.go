package shared

// AddressConfiguration
// Specifies address-based configuration settings for a message that's sent directly to an endpoint.
type AddressConfiguration struct {
	BodyOverride  *string             `json:"BodyOverride,omitempty"`
	ChannelType   *ChannelTypeEnum    `json:"ChannelType,omitempty"`
	Context       map[string]string   `json:"Context,omitempty"`
	RawContent    *string             `json:"RawContent,omitempty"`
	Substitutions map[string][]string `json:"Substitutions,omitempty"`
	TitleOverride *string             `json:"TitleOverride,omitempty"`
}
