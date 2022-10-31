package shared




type VrfStateEnum string

const (
    VrfStateEnumStateUnspecified VrfStateEnum = "STATE_UNSPECIFIED"
VrfStateEnumProvisioning VrfStateEnum = "PROVISIONING"
VrfStateEnumProvisioned VrfStateEnum = "PROVISIONED"
)


type Vrf struct {
    Name *string `json:"name,omitempty"`
    QosPolicy *QosPolicy `json:"qosPolicy,omitempty"`
    State *VrfStateEnum `json:"state,omitempty"`
    VlanAttachments []VlanAttachment `json:"vlanAttachments,omitempty"`
    
}

