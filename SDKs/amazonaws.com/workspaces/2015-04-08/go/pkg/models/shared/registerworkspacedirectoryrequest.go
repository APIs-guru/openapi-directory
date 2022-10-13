package shared

type RegisterWorkspaceDirectoryRequest struct {
	DirectoryID       string       `json:"DirectoryId"`
	EnableSelfService *bool        `json:"EnableSelfService"`
	EnableWorkDocs    bool         `json:"EnableWorkDocs"`
	SubnetIds         []string     `json:"SubnetIds"`
	Tags              []Tag        `json:"Tags"`
	Tenancy           *TenancyEnum `json:"Tenancy"`
}
