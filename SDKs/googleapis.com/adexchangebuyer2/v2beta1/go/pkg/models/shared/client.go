package shared

type ClientEntityTypeEnum string

const (
	ClientEntityTypeEnumEntityTypeUnspecified  ClientEntityTypeEnum = "ENTITY_TYPE_UNSPECIFIED"
	ClientEntityTypeEnumAdvertiser             ClientEntityTypeEnum = "ADVERTISER"
	ClientEntityTypeEnumBrand                  ClientEntityTypeEnum = "BRAND"
	ClientEntityTypeEnumAgency                 ClientEntityTypeEnum = "AGENCY"
	ClientEntityTypeEnumEntityTypeUnclassified ClientEntityTypeEnum = "ENTITY_TYPE_UNCLASSIFIED"
)

type ClientRoleEnum string

const (
	ClientRoleEnumClientRoleUnspecified ClientRoleEnum = "CLIENT_ROLE_UNSPECIFIED"
	ClientRoleEnumClientDealViewer      ClientRoleEnum = "CLIENT_DEAL_VIEWER"
	ClientRoleEnumClientDealNegotiator  ClientRoleEnum = "CLIENT_DEAL_NEGOTIATOR"
	ClientRoleEnumClientDealApprover    ClientRoleEnum = "CLIENT_DEAL_APPROVER"
)

type ClientStatusEnum string

const (
	ClientStatusEnumClientStatusUnspecified ClientStatusEnum = "CLIENT_STATUS_UNSPECIFIED"
	ClientStatusEnumDisabled                ClientStatusEnum = "DISABLED"
	ClientStatusEnumActive                  ClientStatusEnum = "ACTIVE"
)

// Client
// A client resource represents a client buyer—an agency, a brand, or an advertiser customer of the sponsor buyer. Users associated with the client buyer have restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the client buyer. All fields are required unless otherwise specified.
type Client struct {
	ClientAccountID *string               `json:"clientAccountId,omitempty"`
	ClientName      *string               `json:"clientName,omitempty"`
	EntityID        *string               `json:"entityId,omitempty"`
	EntityName      *string               `json:"entityName,omitempty"`
	EntityType      *ClientEntityTypeEnum `json:"entityType,omitempty"`
	PartnerClientID *string               `json:"partnerClientId,omitempty"`
	Role            *ClientRoleEnum       `json:"role,omitempty"`
	Status          *ClientStatusEnum     `json:"status,omitempty"`
	VisibleToSeller *bool                 `json:"visibleToSeller,omitempty"`
}
