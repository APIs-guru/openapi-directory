package shared

// DefaultWorkspaceCreationProperties
// Describes the default values that are used to create WorkSpaces. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html">Update Directory Details for Your WorkSpaces</a>.
type DefaultWorkspaceCreationProperties struct {
	CustomSecurityGroupID           *string `json:"CustomSecurityGroupId,omitempty"`
	DefaultOu                       *string `json:"DefaultOu,omitempty"`
	EnableInternetAccess            *bool   `json:"EnableInternetAccess,omitempty"`
	EnableMaintenanceMode           *bool   `json:"EnableMaintenanceMode,omitempty"`
	EnableWorkDocs                  *bool   `json:"EnableWorkDocs,omitempty"`
	UserEnabledAsLocalAdministrator *bool   `json:"UserEnabledAsLocalAdministrator,omitempty"`
}
