package shared

type V2Restrictions struct {
	AndroidKeyRestrictions *V2AndroidKeyRestrictions `json:"androidKeyRestrictions"`
	APITargets             []V2APITarget             `json:"apiTargets"`
	BrowserKeyRestrictions *V2BrowserKeyRestrictions `json:"browserKeyRestrictions"`
	IosKeyRestrictions     *V2IosKeyRestrictions     `json:"iosKeyRestrictions"`
	ServerKeyRestrictions  *V2ServerKeyRestrictions  `json:"serverKeyRestrictions"`
}
