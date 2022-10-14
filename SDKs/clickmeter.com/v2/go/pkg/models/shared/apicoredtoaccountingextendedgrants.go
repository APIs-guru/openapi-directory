package shared

type APICoreDtoAccountingExtendedGrants struct {
	AllowAllGrants     *bool `json:"allowAllGrants,omitempty" form:"name=allowAllGrants"`
	AllowGroupCreation *bool `json:"allowGroupCreation,omitempty" form:"name=allowGroupCreation"`
}
