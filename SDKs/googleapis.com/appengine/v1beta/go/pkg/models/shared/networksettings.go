package shared

type NetworkSettingsIngressTrafficAllowedEnum string

const (
	NetworkSettingsIngressTrafficAllowedEnumIngressTrafficAllowedUnspecified   NetworkSettingsIngressTrafficAllowedEnum = "INGRESS_TRAFFIC_ALLOWED_UNSPECIFIED"
	NetworkSettingsIngressTrafficAllowedEnumIngressTrafficAllowedAll           NetworkSettingsIngressTrafficAllowedEnum = "INGRESS_TRAFFIC_ALLOWED_ALL"
	NetworkSettingsIngressTrafficAllowedEnumIngressTrafficAllowedInternalOnly  NetworkSettingsIngressTrafficAllowedEnum = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_ONLY"
	NetworkSettingsIngressTrafficAllowedEnumIngressTrafficAllowedInternalAndLb NetworkSettingsIngressTrafficAllowedEnum = "INGRESS_TRAFFIC_ALLOWED_INTERNAL_AND_LB"
)

// NetworkSettings
// A NetworkSettings resource is a container for ingress settings for a version or service.
type NetworkSettings struct {
	IngressTrafficAllowed *NetworkSettingsIngressTrafficAllowedEnum `json:"ingressTrafficAllowed,omitempty"`
}
