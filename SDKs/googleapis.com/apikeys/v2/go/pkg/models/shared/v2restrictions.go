package shared

type V2Restrictions struct {
	AndroidKeyRestrictions *V2AndroidKeyRestrictions `json:"androidKeyRestrictions,omitempty"`
	APITargets             []V2APITarget             `json:"apiTargets,omitempty"`
	BrowserKeyRestrictions *V2BrowserKeyRestrictions `json:"browserKeyRestrictions,omitempty"`
	IosKeyRestrictions     *V2IosKeyRestrictions     `json:"iosKeyRestrictions,omitempty"`
	ServerKeyRestrictions  *V2ServerKeyRestrictions  `json:"serverKeyRestrictions,omitempty"`
}
