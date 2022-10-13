package shared

type APICoreDtoAccountingIPBlacklistEntry struct {
	ID *string `json:"id" form:"name=id"`
	IP *string `json:"ip" form:"name=ip"`
}
