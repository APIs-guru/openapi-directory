package shared

type RegisterWorkspaceDirectoryRequest struct {
	DirectoryID       string       `json:"DirectoryId"`
	EnableSelfService *bool        `json:"EnableSelfService,omitempty"`
	EnableWorkDocs    bool         `json:"EnableWorkDocs"`
	SubnetIds         []string     `json:"SubnetIds,omitempty"`
	Tags              []Tag        `json:"Tags,omitempty"`
	Tenancy           *TenancyEnum `json:"Tenancy,omitempty"`
}
