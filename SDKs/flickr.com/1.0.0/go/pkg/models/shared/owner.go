package shared

type Owner struct {
	Iconfarm      *string `json:"iconfarm"`
	Iconserver    *string `json:"iconserver"`
	IsAdFree      *bool   `json:"is_ad_free"`
	Ispro         *bool   `json:"ispro"`
	Location      *string `json:"location"`
	Noindexfollow *bool   `json:"noindexfollow"`
	Nsid          *string `json:"nsid"`
	PathAlias     *string `json:"path_alias"`
	Realname      *string `json:"realname"`
	Username      *string `json:"username"`
}
