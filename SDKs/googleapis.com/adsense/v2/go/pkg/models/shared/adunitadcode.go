package shared

// AdUnitAdCode
// Representation of the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).
type AdUnitAdCode struct {
	AdCode *string `json:"adCode,omitempty"`
}
