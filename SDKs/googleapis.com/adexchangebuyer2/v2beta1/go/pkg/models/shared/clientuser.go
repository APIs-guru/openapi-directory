package shared

type ClientUserStatusEnum string

const (
	ClientUserStatusEnumUserStatusUnspecified ClientUserStatusEnum = "USER_STATUS_UNSPECIFIED"
	ClientUserStatusEnumPending               ClientUserStatusEnum = "PENDING"
	ClientUserStatusEnumActive                ClientUserStatusEnum = "ACTIVE"
	ClientUserStatusEnumDisabled              ClientUserStatusEnum = "DISABLED"
)

// ClientUser
// A client user is created under a client buyer and has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client buyer. The only way a new client user can be created is through accepting an email invitation (see the accounts.clients.invitations.create method). All fields are required unless otherwise specified.
type ClientUser struct {
	ClientAccountID *string               `json:"clientAccountId,omitempty"`
	Email           *string               `json:"email,omitempty"`
	Status          *ClientUserStatusEnum `json:"status,omitempty"`
	UserID          *string               `json:"userId,omitempty"`
}
