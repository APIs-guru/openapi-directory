package shared

type NetworkInstanceIPModeEnum string

const (
	NetworkInstanceIPModeEnumInstanceIPModeUnspecified NetworkInstanceIPModeEnum = "INSTANCE_IP_MODE_UNSPECIFIED"
	NetworkInstanceIPModeEnumExternal                  NetworkInstanceIPModeEnum = "EXTERNAL"
	NetworkInstanceIPModeEnumInternal                  NetworkInstanceIPModeEnum = "INTERNAL"
)

type Network struct {
	ForwardedPorts  []string                   `json:"forwardedPorts,omitempty"`
	InstanceIPMode  *NetworkInstanceIPModeEnum `json:"instanceIpMode,omitempty"`
	InstanceTag     *string                    `json:"instanceTag,omitempty"`
	Name            *string                    `json:"name,omitempty"`
	SessionAffinity *bool                      `json:"sessionAffinity,omitempty"`
	SubnetworkName  *string                    `json:"subnetworkName,omitempty"`
}
