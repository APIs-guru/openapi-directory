package shared

type Site struct {
	AccountID   *string           `json:"AccountId"`
	Description *string           `json:"Description"`
	Name        *string           `json:"Name"`
	SiteArn     *string           `json:"SiteArn"`
	SiteID      *string           `json:"SiteId"`
	Tags        map[string]string `json:"Tags"`
}
