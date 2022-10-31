package shared

type AdClientStateEnum string

const (
	AdClientStateEnumStateUnspecified AdClientStateEnum = "STATE_UNSPECIFIED"
	AdClientStateEnumReady            AdClientStateEnum = "READY"
	AdClientStateEnumGettingReady     AdClientStateEnum = "GETTING_READY"
	AdClientStateEnumRequiresReview   AdClientStateEnum = "REQUIRES_REVIEW"
)

type AdClient struct {
	Name                 *string            `json:"name,omitempty"`
	ProductCode          *string            `json:"productCode,omitempty"`
	ReportingDimensionID *string            `json:"reportingDimensionId,omitempty"`
	State                *AdClientStateEnum `json:"state,omitempty"`
}
