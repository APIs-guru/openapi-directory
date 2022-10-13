package shared

type InAppMessageButton struct {
	Android       *OverrideButtonConfiguration `json:"Android"`
	DefaultConfig *DefaultButtonConfiguration  `json:"DefaultConfig"`
	Ios           *OverrideButtonConfiguration `json:"IOS"`
	Web           *OverrideButtonConfiguration `json:"Web"`
}
