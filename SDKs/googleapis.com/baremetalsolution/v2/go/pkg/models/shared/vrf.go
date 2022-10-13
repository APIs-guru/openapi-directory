package shared

type VrfStateEnum string

const (
	VrfStateEnumStateUnspecified VrfStateEnum = "STATE_UNSPECIFIED"
	VrfStateEnumProvisioning     VrfStateEnum = "PROVISIONING"
	VrfStateEnumProvisioned      VrfStateEnum = "PROVISIONED"
)

type Vrf struct {
	Name            *string          `json:"name"`
	QosPolicy       *QosPolicy       `json:"qosPolicy"`
	State           *VrfStateEnum    `json:"state"`
	VlanAttachments []VlanAttachment `json:"vlanAttachments"`
}
