package shared

type EndpointsAPIServiceRolloutStrategyEnum string

const (
	EndpointsAPIServiceRolloutStrategyEnumUnspecifiedRolloutStrategy EndpointsAPIServiceRolloutStrategyEnum = "UNSPECIFIED_ROLLOUT_STRATEGY"
	EndpointsAPIServiceRolloutStrategyEnumFixed                      EndpointsAPIServiceRolloutStrategyEnum = "FIXED"
	EndpointsAPIServiceRolloutStrategyEnumManaged                    EndpointsAPIServiceRolloutStrategyEnum = "MANAGED"
)

// EndpointsAPIService
// Google Cloud Endpoints (https://cloud.google.com/endpoints) configuration. The Endpoints API Service provides tooling for serving Open API and gRPC endpoints via an NGINX proxy. Only valid for App Engine Flexible environment deployments.The fields here refer to the name and configuration ID of a "service" resource in the Service Management API (https://cloud.google.com/service-management/overview).
type EndpointsAPIService struct {
	ConfigID             *string                                 `json:"configId,omitempty"`
	DisableTraceSampling *bool                                   `json:"disableTraceSampling,omitempty"`
	Name                 *string                                 `json:"name,omitempty"`
	RolloutStrategy      *EndpointsAPIServiceRolloutStrategyEnum `json:"rolloutStrategy,omitempty"`
}
