package shared

type Configuration struct {
	CompanyName       *string `json:"companyName"`
	ConfigurationID   *string `json:"configurationId"`
	ConfigurationName *string `json:"configurationName"`
	ContactEmail      *string `json:"contactEmail"`
	ContactPhone      *string `json:"contactPhone"`
	CustomMessage     *string `json:"customMessage"`
	DpcExtras         *string `json:"dpcExtras"`
	DpcResourcePath   *string `json:"dpcResourcePath"`
	IsDefault         *bool   `json:"isDefault"`
	Name              *string `json:"name"`
}
