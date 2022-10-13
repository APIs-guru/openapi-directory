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

type Client struct {
	ClientAccountID *string               `json:"clientAccountId"`
	ClientName      *string               `json:"clientName"`
	EntityID        *string               `json:"entityId"`
	EntityName      *string               `json:"entityName"`
	EntityType      *ClientEntityTypeEnum `json:"entityType"`
	PartnerClientID *string               `json:"partnerClientId"`
	Role            *ClientRoleEnum       `json:"role"`
	Status          *ClientStatusEnum     `json:"status"`
	VisibleToSeller *bool                 `json:"visibleToSeller"`
}
