package shared

type DefaultWorkspaceCreationProperties struct {
	CustomSecurityGroupID           *string `json:"CustomSecurityGroupId"`
	DefaultOu                       *string `json:"DefaultOu"`
	EnableInternetAccess            *bool   `json:"EnableInternetAccess"`
	EnableMaintenanceMode           *bool   `json:"EnableMaintenanceMode"`
	EnableWorkDocs                  *bool   `json:"EnableWorkDocs"`
	UserEnabledAsLocalAdministrator *bool   `json:"UserEnabledAsLocalAdministrator"`
}
