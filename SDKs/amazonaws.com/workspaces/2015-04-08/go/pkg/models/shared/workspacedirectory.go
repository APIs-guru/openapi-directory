package shared

// WorkspaceDirectory
// Describes a directory that is used with Amazon WorkSpaces.
type WorkspaceDirectory struct {
	Alias                       *string                             `json:"Alias,omitempty"`
	CustomerUserName            *string                             `json:"CustomerUserName,omitempty"`
	DirectoryID                 *string                             `json:"DirectoryId,omitempty"`
	DirectoryName               *string                             `json:"DirectoryName,omitempty"`
	DirectoryType               *WorkspaceDirectoryTypeEnum         `json:"DirectoryType,omitempty"`
	DNSIPAddresses              []string                            `json:"DnsIpAddresses,omitempty"`
	IamRoleID                   *string                             `json:"IamRoleId,omitempty"`
	RegistrationCode            *string                             `json:"RegistrationCode,omitempty"`
	SelfservicePermissions      *SelfservicePermissions             `json:"SelfservicePermissions,omitempty"`
	State                       *WorkspaceDirectoryStateEnum        `json:"State,omitempty"`
	SubnetIds                   []string                            `json:"SubnetIds,omitempty"`
	Tenancy                     *TenancyEnum                        `json:"Tenancy,omitempty"`
	WorkspaceAccessProperties   *WorkspaceAccessProperties          `json:"WorkspaceAccessProperties,omitempty"`
	WorkspaceCreationProperties *DefaultWorkspaceCreationProperties `json:"WorkspaceCreationProperties,omitempty"`
	WorkspaceSecurityGroupID    *string                             `json:"WorkspaceSecurityGroupId,omitempty"`
	IPGroupIds                  []string                            `json:"ipGroupIds,omitempty"`
}
