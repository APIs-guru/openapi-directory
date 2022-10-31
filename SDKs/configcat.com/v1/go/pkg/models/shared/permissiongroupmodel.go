package shared

type PermissionGroupModel struct {
	AccessType                   *AccessTypeEnum            `json:"accessType,omitempty"`
	CanCreateOrUpdateConfig      *bool                      `json:"canCreateOrUpdateConfig,omitempty"`
	CanCreateOrUpdateEnvironment *bool                      `json:"canCreateOrUpdateEnvironment,omitempty"`
	CanCreateOrUpdateSetting     *bool                      `json:"canCreateOrUpdateSetting,omitempty"`
	CanCreateOrUpdateTag         *bool                      `json:"canCreateOrUpdateTag,omitempty"`
	CanDeleteConfig              *bool                      `json:"canDeleteConfig,omitempty"`
	CanDeleteEnvironment         *bool                      `json:"canDeleteEnvironment,omitempty"`
	CanDeleteSetting             *bool                      `json:"canDeleteSetting,omitempty"`
	CanDeleteTag                 *bool                      `json:"canDeleteTag,omitempty"`
	CanManageIntegrations        *bool                      `json:"canManageIntegrations,omitempty"`
	CanManageMembers             *bool                      `json:"canManageMembers,omitempty"`
	CanManageProductPreferences  *bool                      `json:"canManageProductPreferences,omitempty"`
	CanManageWebhook             *bool                      `json:"canManageWebhook,omitempty"`
	CanRotateSdkKey              *bool                      `json:"canRotateSdkKey,omitempty"`
	CanTagSetting                *bool                      `json:"canTagSetting,omitempty"`
	CanUseExportImport           *bool                      `json:"canUseExportImport,omitempty"`
	CanViewSdkKey                *bool                      `json:"canViewSdkKey,omitempty"`
	EnvironmentAccesses          []EnvironmentAccessModel   `json:"environmentAccesses,omitempty"`
	Name                         *string                    `json:"name,omitempty"`
	NewEnvironmentAccessType     *EnvironmentAccessTypeEnum `json:"newEnvironmentAccessType,omitempty"`
	PermissionGroupID            *int64                     `json:"permissionGroupId,omitempty"`
}
