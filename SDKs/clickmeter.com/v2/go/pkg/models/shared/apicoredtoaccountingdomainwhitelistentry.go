package shared

type APICoreDtoAccountingDomainWhitelistEntry struct {
	ID   *string `json:"id,omitempty" form:"name=id"`
	Name *string `json:"name,omitempty" form:"name=name"`
}
