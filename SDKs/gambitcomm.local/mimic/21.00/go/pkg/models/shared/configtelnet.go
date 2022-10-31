package shared



type ConfigTelnet struct {
    Keymap *string `json:"keymap,omitempty"`
    PagingPrompt *string `json:"paging_prompt,omitempty"`
    Port *int32 `json:"port,omitempty"`
    Prompt *string `json:"prompt,omitempty"`
    Rule *string `json:"rule,omitempty"`
    Userdb *string `json:"userdb,omitempty"`
    
}

