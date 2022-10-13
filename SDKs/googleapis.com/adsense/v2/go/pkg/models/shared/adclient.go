package shared

type AdClientStateEnum string

const (
	AdClientStateEnumStateUnspecified AdClientStateEnum = "STATE_UNSPECIFIED"
	AdClientStateEnumReady            AdClientStateEnum = "READY"
	AdClientStateEnumGettingReady     AdClientStateEnum = "GETTING_READY"
	AdClientStateEnumRequiresReview   AdClientStateEnum = "REQUIRES_REVIEW"
)

type AdClient struct {
	Name                 *string            `json:"name"`
	ProductCode          *string            `json:"productCode"`
	ReportingDimensionID *string            `json:"reportingDimensionId"`
	State                *AdClientStateEnum `json:"state"`
}
