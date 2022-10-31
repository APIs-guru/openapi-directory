package shared



type APIVersion struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *string `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

