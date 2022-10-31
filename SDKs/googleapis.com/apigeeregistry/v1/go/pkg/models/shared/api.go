package shared



type API struct {
    Annotations map[string]string `json:"annotations,omitempty"`
    Availability *string `json:"availability,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    RecommendedDeployment *string `json:"recommendedDeployment,omitempty"`
    RecommendedVersion *string `json:"recommendedVersion,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

