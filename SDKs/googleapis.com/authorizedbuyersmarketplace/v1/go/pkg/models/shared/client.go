package shared

type ClientRoleEnum string

const (
	ClientRoleEnumClientRoleUnspecified ClientRoleEnum = "CLIENT_ROLE_UNSPECIFIED"
	ClientRoleEnumClientDealViewer      ClientRoleEnum = "CLIENT_DEAL_VIEWER"
	ClientRoleEnumClientDealNegotiator  ClientRoleEnum = "CLIENT_DEAL_NEGOTIATOR"
	ClientRoleEnumClientDealApprover    ClientRoleEnum = "CLIENT_DEAL_APPROVER"
)

type ClientStateEnum string

const (
	ClientStateEnumStateUnspecified ClientStateEnum = "STATE_UNSPECIFIED"
	ClientStateEnumActive           ClientStateEnum = "ACTIVE"
	ClientStateEnumInactive         ClientStateEnum = "INACTIVE"
)

// Client
// A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
type Client struct {
	DisplayName     *string          `json:"displayName,omitempty"`
	Name            *string          `json:"name,omitempty"`
	PartnerClientID *string          `json:"partnerClientId,omitempty"`
	Role            *ClientRoleEnum  `json:"role,omitempty"`
	SellerVisible   *bool            `json:"sellerVisible,omitempty"`
	State           *ClientStateEnum `json:"state,omitempty"`
}

// ClientInput
// A client represents an agency, a brand, or an advertiser customer of the buyer. Based on the client's role, its client users will have varying levels of restricted access to the Marketplace and certain other sections of the Authorized Buyers UI.
type ClientInput struct {
	DisplayName     *string         `json:"displayName,omitempty"`
	PartnerClientID *string         `json:"partnerClientId,omitempty"`
	Role            *ClientRoleEnum `json:"role,omitempty"`
	SellerVisible   *bool           `json:"sellerVisible,omitempty"`
}
