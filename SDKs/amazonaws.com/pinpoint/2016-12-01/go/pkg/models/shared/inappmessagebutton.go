package shared

// InAppMessageButton
// Button Config for an in-app message.
type InAppMessageButton struct {
	Android       *OverrideButtonConfiguration `json:"Android,omitempty"`
	DefaultConfig *DefaultButtonConfiguration  `json:"DefaultConfig,omitempty"`
	Ios           *OverrideButtonConfiguration `json:"IOS,omitempty"`
	Web           *OverrideButtonConfiguration `json:"Web,omitempty"`
}
