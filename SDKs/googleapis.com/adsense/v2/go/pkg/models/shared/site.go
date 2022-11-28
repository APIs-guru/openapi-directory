package shared

type SiteStateEnum string

const (
	SiteStateEnumStateUnspecified SiteStateEnum = "STATE_UNSPECIFIED"
	SiteStateEnumRequiresReview   SiteStateEnum = "REQUIRES_REVIEW"
	SiteStateEnumGettingReady     SiteStateEnum = "GETTING_READY"
	SiteStateEnumReady            SiteStateEnum = "READY"
	SiteStateEnumNeedsAttention   SiteStateEnum = "NEEDS_ATTENTION"
)

// Site
// Representation of a Site.
type Site struct {
	AutoAdsEnabled       *bool          `json:"autoAdsEnabled,omitempty"`
	Domain               *string        `json:"domain,omitempty"`
	Name                 *string        `json:"name,omitempty"`
	ReportingDimensionID *string        `json:"reportingDimensionId,omitempty"`
	State                *SiteStateEnum `json:"state,omitempty"`
}
