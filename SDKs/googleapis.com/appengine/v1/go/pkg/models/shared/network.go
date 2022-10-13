package shared

type NetworkInstanceIPModeEnum string

const (
	NetworkInstanceIPModeEnumInstanceIPModeUnspecified NetworkInstanceIPModeEnum = "INSTANCE_IP_MODE_UNSPECIFIED"
	NetworkInstanceIPModeEnumExternal                  NetworkInstanceIPModeEnum = "EXTERNAL"
	NetworkInstanceIPModeEnumInternal                  NetworkInstanceIPModeEnum = "INTERNAL"
)

type Network struct {
	ForwardedPorts  []string                   `json:"forwardedPorts"`
	InstanceIPMode  *NetworkInstanceIPModeEnum `json:"instanceIpMode"`
	InstanceTag     *string                    `json:"instanceTag"`
	Name            *string                    `json:"name"`
	SessionAffinity *bool                      `json:"sessionAffinity"`
	SubnetworkName  *string                    `json:"subnetworkName"`
}
