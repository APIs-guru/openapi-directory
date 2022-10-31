package shared



type AdmMessage struct {
    Action *ActionEnum `json:"Action,omitempty"`
    Body *string `json:"Body,omitempty"`
    ConsolidationKey *string `json:"ConsolidationKey,omitempty"`
    Data map[string]string `json:"Data,omitempty"`
    ExpiresAfter *string `json:"ExpiresAfter,omitempty"`
    IconReference *string `json:"IconReference,omitempty"`
    ImageIconURL *string `json:"ImageIconUrl,omitempty"`
    ImageURL *string `json:"ImageUrl,omitempty"`
    Md5 *string `json:"MD5,omitempty"`
    RawContent *string `json:"RawContent,omitempty"`
    SilentPush *bool `json:"SilentPush,omitempty"`
    SmallImageIconURL *string `json:"SmallImageIconUrl,omitempty"`
    Sound *string `json:"Sound,omitempty"`
    Substitutions map[string][]string `json:"Substitutions,omitempty"`
    Title *string `json:"Title,omitempty"`
    URL *string `json:"Url,omitempty"`
    
}

