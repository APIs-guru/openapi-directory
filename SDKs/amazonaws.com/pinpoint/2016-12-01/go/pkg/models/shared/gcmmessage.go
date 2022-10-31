package shared



type GcmMessage struct {
    Action *ActionEnum `json:"Action,omitempty"`
    Body *string `json:"Body,omitempty"`
    CollapseKey *string `json:"CollapseKey,omitempty"`
    Data map[string]string `json:"Data,omitempty"`
    IconReference *string `json:"IconReference,omitempty"`
    ImageIconURL *string `json:"ImageIconUrl,omitempty"`
    ImageURL *string `json:"ImageUrl,omitempty"`
    Priority *string `json:"Priority,omitempty"`
    RawContent *string `json:"RawContent,omitempty"`
    RestrictedPackageName *string `json:"RestrictedPackageName,omitempty"`
    SilentPush *bool `json:"SilentPush,omitempty"`
    SmallImageIconURL *string `json:"SmallImageIconUrl,omitempty"`
    Sound *string `json:"Sound,omitempty"`
    Substitutions map[string][]string `json:"Substitutions,omitempty"`
    TimeToLive *int64 `json:"TimeToLive,omitempty"`
    Title *string `json:"Title,omitempty"`
    URL *string `json:"Url,omitempty"`
    
}

