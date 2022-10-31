package shared




type ClientRoleEnum string

const (
    ClientRoleEnumClientRoleUnspecified ClientRoleEnum = "CLIENT_ROLE_UNSPECIFIED"
ClientRoleEnumClientDealViewer ClientRoleEnum = "CLIENT_DEAL_VIEWER"
ClientRoleEnumClientDealNegotiator ClientRoleEnum = "CLIENT_DEAL_NEGOTIATOR"
ClientRoleEnumClientDealApprover ClientRoleEnum = "CLIENT_DEAL_APPROVER"
)



type ClientStateEnum string

const (
    ClientStateEnumStateUnspecified ClientStateEnum = "STATE_UNSPECIFIED"
ClientStateEnumActive ClientStateEnum = "ACTIVE"
ClientStateEnumInactive ClientStateEnum = "INACTIVE"
)


type Client struct {
    DisplayName *string `json:"displayName,omitempty"`
    Name *string `json:"name,omitempty"`
    PartnerClientID *string `json:"partnerClientId,omitempty"`
    Role *ClientRoleEnum `json:"role,omitempty"`
    SellerVisible *bool `json:"sellerVisible,omitempty"`
    State *ClientStateEnum `json:"state,omitempty"`
    
}

