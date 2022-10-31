package shared

type WorkspaceCreationProperties struct {
	CustomSecurityGroupID           *string `json:"CustomSecurityGroupId,omitempty"`
	DefaultOu                       *string `json:"DefaultOu,omitempty"`
	EnableInternetAccess            *bool   `json:"EnableInternetAccess,omitempty"`
	EnableMaintenanceMode           *bool   `json:"EnableMaintenanceMode,omitempty"`
	EnableWorkDocs                  *bool   `json:"EnableWorkDocs,omitempty"`
	UserEnabledAsLocalAdministrator *bool   `json:"UserEnabledAsLocalAdministrator,omitempty"`
}
