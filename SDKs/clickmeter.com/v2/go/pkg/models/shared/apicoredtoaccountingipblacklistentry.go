package shared

type APICoreDtoAccountingIPBlacklistEntry struct {
	ID *string `json:"id,omitempty" form:"name=id"`
	IP *string `json:"ip,omitempty" form:"name=ip"`
}
