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

type Client struct {
	DisplayName     *string          `json:"displayName"`
	Name            *string          `json:"name"`
	PartnerClientID *string          `json:"partnerClientId"`
	Role            *ClientRoleEnum  `json:"role"`
	SellerVisible   *bool            `json:"sellerVisible"`
	State           *ClientStateEnum `json:"state"`
}
