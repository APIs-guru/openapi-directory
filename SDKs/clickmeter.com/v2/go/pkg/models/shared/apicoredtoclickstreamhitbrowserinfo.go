package shared

type APICoreDtoClickStreamHitBrowserInfo struct {
	BrowserType *string `json:"browserType"`
	FamilyID    *int64  `json:"familyId"`
	FamilyName  *string `json:"familyName"`
	ID          *int64  `json:"id"`
	Name        *string `json:"name"`
}
