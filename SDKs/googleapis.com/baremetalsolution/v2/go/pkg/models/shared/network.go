package shared

type NetworkStateEnum string

const (
	NetworkStateEnumStateUnspecified NetworkStateEnum = "STATE_UNSPECIFIED"
	NetworkStateEnumProvisioning     NetworkStateEnum = "PROVISIONING"
	NetworkStateEnumProvisioned      NetworkStateEnum = "PROVISIONED"
	NetworkStateEnumDeprovisioning   NetworkStateEnum = "DEPROVISIONING"
	NetworkStateEnumUpdating         NetworkStateEnum = "UPDATING"
)

type NetworkTypeEnum string

const (
	NetworkTypeEnumTypeUnspecified NetworkTypeEnum = "TYPE_UNSPECIFIED"
	NetworkTypeEnumClient          NetworkTypeEnum = "CLIENT"
	NetworkTypeEnumPrivate         NetworkTypeEnum = "PRIVATE"
)

// Network
// A Network.
type Network struct {
	Cidr               *string                     `json:"cidr,omitempty"`
	GatewayIP          *string                     `json:"gatewayIp,omitempty"`
	ID                 *string                     `json:"id,omitempty"`
	IPAddress          *string                     `json:"ipAddress,omitempty"`
	JumboFramesEnabled *bool                       `json:"jumboFramesEnabled,omitempty"`
	Labels             map[string]string           `json:"labels,omitempty"`
	MacAddress         []string                    `json:"macAddress,omitempty"`
	MountPoints        []NetworkMountPoint         `json:"mountPoints,omitempty"`
	Name               *string                     `json:"name,omitempty"`
	Pod                *string                     `json:"pod,omitempty"`
	Reservations       []NetworkAddressReservation `json:"reservations,omitempty"`
	ServicesCidr       *string                     `json:"servicesCidr,omitempty"`
	State              *NetworkStateEnum           `json:"state,omitempty"`
	Type               *NetworkTypeEnum            `json:"type,omitempty"`
	VlanID             *string                     `json:"vlanId,omitempty"`
	Vrf                *Vrf                        `json:"vrf,omitempty"`
}
