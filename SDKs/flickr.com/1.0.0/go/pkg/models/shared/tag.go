package shared



type Tag struct {
    Content *string `json:"_content,omitempty"`
    Author *string `json:"author,omitempty"`
    Authorname *string `json:"authorname,omitempty"`
    ID *string `json:"id,omitempty"`
    MachineTag *bool `json:"machine_tag,omitempty"`
    Raw *string `json:"raw,omitempty"`
    
}

