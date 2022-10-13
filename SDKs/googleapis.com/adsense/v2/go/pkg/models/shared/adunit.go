package shared

type AdUnitStateEnum string

const (
	AdUnitStateEnumStateUnspecified AdUnitStateEnum = "STATE_UNSPECIFIED"
	AdUnitStateEnumActive           AdUnitStateEnum = "ACTIVE"
	AdUnitStateEnumArchived         AdUnitStateEnum = "ARCHIVED"
)

type AdUnit struct {
	ContentAdsSettings   *ContentAdsSettings `json:"contentAdsSettings"`
	DisplayName          *string             `json:"displayName"`
	Name                 *string             `json:"name"`
	ReportingDimensionID *string             `json:"reportingDimensionId"`
	State                *AdUnitStateEnum    `json:"state"`
}
