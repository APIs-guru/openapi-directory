package shared

type AdUnitStateEnum string

const (
	AdUnitStateEnumStateUnspecified AdUnitStateEnum = "STATE_UNSPECIFIED"
	AdUnitStateEnumActive           AdUnitStateEnum = "ACTIVE"
	AdUnitStateEnumArchived         AdUnitStateEnum = "ARCHIVED"
)

// AdUnit
// Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
type AdUnit struct {
	ContentAdsSettings   *ContentAdsSettings `json:"contentAdsSettings,omitempty"`
	DisplayName          *string             `json:"displayName,omitempty"`
	Name                 *string             `json:"name,omitempty"`
	ReportingDimensionID *string             `json:"reportingDimensionId,omitempty"`
	State                *AdUnitStateEnum    `json:"state,omitempty"`
}

// AdUnitInput
// Representation of an ad unit. An ad unit represents a saved ad unit with a specific set of ad settings that have been customized within an account.
type AdUnitInput struct {
	ContentAdsSettings *ContentAdsSettings `json:"contentAdsSettings,omitempty"`
	DisplayName        *string             `json:"displayName,omitempty"`
	State              *AdUnitStateEnum    `json:"state,omitempty"`
}
