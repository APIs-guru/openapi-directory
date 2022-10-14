package shared

type AdUnitStateEnum string

const (
	AdUnitStateEnumStateUnspecified AdUnitStateEnum = "STATE_UNSPECIFIED"
	AdUnitStateEnumActive           AdUnitStateEnum = "ACTIVE"
	AdUnitStateEnumArchived         AdUnitStateEnum = "ARCHIVED"
)

type AdUnit struct {
	ContentAdsSettings   *ContentAdsSettings `json:"contentAdsSettings,omitempty"`
	DisplayName          *string             `json:"displayName,omitempty"`
	Name                 *string             `json:"name,omitempty"`
	ReportingDimensionID *string             `json:"reportingDimensionId,omitempty"`
	State                *AdUnitStateEnum    `json:"state,omitempty"`
}
