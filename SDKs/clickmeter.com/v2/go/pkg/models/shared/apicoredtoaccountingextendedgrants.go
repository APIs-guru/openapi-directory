package shared

type APICoreDtoAccountingExtendedGrants struct {
	AllowAllGrants     *bool `json:"allowAllGrants" form:"name=allowAllGrants"`
	AllowGroupCreation *bool `json:"allowGroupCreation" form:"name=allowGroupCreation"`
}
