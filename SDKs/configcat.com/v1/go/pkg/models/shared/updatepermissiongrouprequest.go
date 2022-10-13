package shared

type UpdatePermissionGroupRequest struct {
	AccessType                   *AccessTypeEnum            `json:"accessType"`
	CanCreateOrUpdateConfig      *bool                      `json:"canCreateOrUpdateConfig"`
	CanCreateOrUpdateEnvironment *bool                      `json:"canCreateOrUpdateEnvironment"`
	CanCreateOrUpdateSetting     *bool                      `json:"canCreateOrUpdateSetting"`
	CanCreateOrUpdateTag         *bool                      `json:"canCreateOrUpdateTag"`
	CanDeleteConfig              *bool                      `json:"canDeleteConfig"`
	CanDeleteEnvironment         *bool                      `json:"canDeleteEnvironment"`
	CanDeleteSetting             *bool                      `json:"canDeleteSetting"`
	CanDeleteTag                 *bool                      `json:"canDeleteTag"`
	CanManageIntegrations        *bool                      `json:"canManageIntegrations"`
	CanManageMembers             *bool                      `json:"canManageMembers"`
	CanManageProductPreferences  *bool                      `json:"canManageProductPreferences"`
	CanManageWebhook             *bool                      `json:"canManageWebhook"`
	CanRotateSdkKey              *bool                      `json:"canRotateSdkKey"`
	CanTagSetting                *bool                      `json:"canTagSetting"`
	CanUseExportImport           *bool                      `json:"canUseExportImport"`
	CanViewProductAuditLog       *bool                      `json:"canViewProductAuditLog"`
	CanViewProductStatistics     *bool                      `json:"canViewProductStatistics"`
	CanViewSdkKey                *bool                      `json:"canViewSdkKey"`
	EnvironmentAccesses          []EnvironmentAccessModel   `json:"environmentAccesses"`
	Name                         *string                    `json:"name"`
	NewEnvironmentAccessType     *EnvironmentAccessTypeEnum `json:"newEnvironmentAccessType"`
}
