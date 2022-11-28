package operations

type EnterpriseAdminSyncLdapMappingForTeamPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON struct {
	Status *string `json:"status,omitempty"`
}

type EnterpriseAdminSyncLdapMappingForTeamRequest struct {
	PathParams EnterpriseAdminSyncLdapMappingForTeamPathParams
}

type EnterpriseAdminSyncLdapMappingForTeamResponse struct {
	ContentType                                                   string
	StatusCode                                                    int64
	EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSONObject *EnterpriseAdminSyncLdapMappingForTeam201ApplicationJSON
}
