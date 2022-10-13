package shared

type WorkspaceDirectory struct {
	Alias                       *string                             `json:"Alias"`
	CustomerUserName            *string                             `json:"CustomerUserName"`
	DirectoryID                 *string                             `json:"DirectoryId"`
	DirectoryName               *string                             `json:"DirectoryName"`
	DirectoryType               *WorkspaceDirectoryTypeEnum         `json:"DirectoryType"`
	DNSIPAddresses              []string                            `json:"DnsIpAddresses"`
	IamRoleID                   *string                             `json:"IamRoleId"`
	RegistrationCode            *string                             `json:"RegistrationCode"`
	SelfservicePermissions      *SelfservicePermissions             `json:"SelfservicePermissions"`
	State                       *WorkspaceDirectoryStateEnum        `json:"State"`
	SubnetIds                   []string                            `json:"SubnetIds"`
	Tenancy                     *TenancyEnum                        `json:"Tenancy"`
	WorkspaceAccessProperties   *WorkspaceAccessProperties          `json:"WorkspaceAccessProperties"`
	WorkspaceCreationProperties *DefaultWorkspaceCreationProperties `json:"WorkspaceCreationProperties"`
	WorkspaceSecurityGroupID    *string                             `json:"WorkspaceSecurityGroupId"`
	IPGroupIds                  []string                            `json:"ipGroupIds"`
}
