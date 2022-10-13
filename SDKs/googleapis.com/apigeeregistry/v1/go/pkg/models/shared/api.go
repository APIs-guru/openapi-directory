package shared

type API struct {
	Annotations           map[string]string `json:"annotations"`
	Availability          *string           `json:"availability"`
	CreateTime            *string           `json:"createTime"`
	Description           *string           `json:"description"`
	DisplayName           *string           `json:"displayName"`
	Labels                map[string]string `json:"labels"`
	Name                  *string           `json:"name"`
	RecommendedDeployment *string           `json:"recommendedDeployment"`
	RecommendedVersion    *string           `json:"recommendedVersion"`
	UpdateTime            *string           `json:"updateTime"`
}
