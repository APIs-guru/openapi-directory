package shared

// WorkspaceCreationProperties
// Describes the default properties that are used for creating WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
type WorkspaceCreationProperties struct {
	CustomSecurityGroupID           *string `json:"CustomSecurityGroupId,omitempty"`
	DefaultOu                       *string `json:"DefaultOu,omitempty"`
	EnableInternetAccess            *bool   `json:"EnableInternetAccess,omitempty"`
	EnableMaintenanceMode           *bool   `json:"EnableMaintenanceMode,omitempty"`
	EnableWorkDocs                  *bool   `json:"EnableWorkDocs,omitempty"`
	UserEnabledAsLocalAdministrator *bool   `json:"UserEnabledAsLocalAdministrator,omitempty"`
}
