package shared

type SiteStateEnum string

const (
	SiteStateEnumStateUnspecified SiteStateEnum = "STATE_UNSPECIFIED"
	SiteStateEnumRequiresReview   SiteStateEnum = "REQUIRES_REVIEW"
	SiteStateEnumGettingReady     SiteStateEnum = "GETTING_READY"
	SiteStateEnumReady            SiteStateEnum = "READY"
	SiteStateEnumNeedsAttention   SiteStateEnum = "NEEDS_ATTENTION"
)

type Site struct {
	AutoAdsEnabled       *bool          `json:"autoAdsEnabled"`
	Domain               *string        `json:"domain"`
	Name                 *string        `json:"name"`
	ReportingDimensionID *string        `json:"reportingDimensionId"`
	State                *SiteStateEnum `json:"state"`
}
