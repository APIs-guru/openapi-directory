package shared

type ConfigTelnet struct {
	Keymap       *string `json:"keymap"`
	PagingPrompt *string `json:"paging_prompt"`
	Port         *int32  `json:"port"`
	Prompt       *string `json:"prompt"`
	Rule         *string `json:"rule"`
	Userdb       *string `json:"userdb"`
}
