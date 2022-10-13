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

type Network struct {
	Cidr               *string                     `json:"cidr"`
	GatewayIP          *string                     `json:"gatewayIp"`
	ID                 *string                     `json:"id"`
	IPAddress          *string                     `json:"ipAddress"`
	JumboFramesEnabled *bool                       `json:"jumboFramesEnabled"`
	Labels             map[string]string           `json:"labels"`
	MacAddress         []string                    `json:"macAddress"`
	MountPoints        []NetworkMountPoint         `json:"mountPoints"`
	Name               *string                     `json:"name"`
	Pod                *string                     `json:"pod"`
	Reservations       []NetworkAddressReservation `json:"reservations"`
	ServicesCidr       *string                     `json:"servicesCidr"`
	State              *NetworkStateEnum           `json:"state"`
	Type               *NetworkTypeEnum            `json:"type"`
	VlanID             *string                     `json:"vlanId"`
	Vrf                *Vrf                        `json:"vrf"`
}
