package shared

type EndpointsAPIServiceRolloutStrategyEnum string

const (
	EndpointsAPIServiceRolloutStrategyEnumUnspecifiedRolloutStrategy EndpointsAPIServiceRolloutStrategyEnum = "UNSPECIFIED_ROLLOUT_STRATEGY"
	EndpointsAPIServiceRolloutStrategyEnumFixed                      EndpointsAPIServiceRolloutStrategyEnum = "FIXED"
	EndpointsAPIServiceRolloutStrategyEnumManaged                    EndpointsAPIServiceRolloutStrategyEnum = "MANAGED"
)

type EndpointsAPIService struct {
	ConfigID             *string                                 `json:"configId"`
	DisableTraceSampling *bool                                   `json:"disableTraceSampling"`
	Name                 *string                                 `json:"name"`
	RolloutStrategy      *EndpointsAPIServiceRolloutStrategyEnum `json:"rolloutStrategy"`
}
