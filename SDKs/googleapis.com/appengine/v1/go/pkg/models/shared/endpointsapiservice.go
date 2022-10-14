package shared

type EndpointsAPIServiceRolloutStrategyEnum string

const (
	EndpointsAPIServiceRolloutStrategyEnumUnspecifiedRolloutStrategy EndpointsAPIServiceRolloutStrategyEnum = "UNSPECIFIED_ROLLOUT_STRATEGY"
	EndpointsAPIServiceRolloutStrategyEnumFixed                      EndpointsAPIServiceRolloutStrategyEnum = "FIXED"
	EndpointsAPIServiceRolloutStrategyEnumManaged                    EndpointsAPIServiceRolloutStrategyEnum = "MANAGED"
)

type EndpointsAPIService struct {
	ConfigID             *string                                 `json:"configId,omitempty"`
	DisableTraceSampling *bool                                   `json:"disableTraceSampling,omitempty"`
	Name                 *string                                 `json:"name,omitempty"`
	RolloutStrategy      *EndpointsAPIServiceRolloutStrategyEnum `json:"rolloutStrategy,omitempty"`
}
