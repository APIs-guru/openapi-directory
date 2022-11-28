package shared

// MobileApplicationTargeting
// Mobile application targeting settings.
type MobileApplicationTargeting struct {
	FirstPartyTargeting *FirstPartyMobileApplicationTargeting `json:"firstPartyTargeting,omitempty"`
}
