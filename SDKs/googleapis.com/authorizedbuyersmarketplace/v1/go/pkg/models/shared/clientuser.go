package shared

type ClientUserStateEnum string

const (
	ClientUserStateEnumStateUnspecified ClientUserStateEnum = "STATE_UNSPECIFIED"
	ClientUserStateEnumInvited          ClientUserStateEnum = "INVITED"
	ClientUserStateEnumActive           ClientUserStateEnum = "ACTIVE"
	ClientUserStateEnumInactive         ClientUserStateEnum = "INACTIVE"
)

// ClientUser
// A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
type ClientUser struct {
	Email *string              `json:"email,omitempty"`
	Name  *string              `json:"name,omitempty"`
	State *ClientUserStateEnum `json:"state,omitempty"`
}

// ClientUserInput
// A user of a client who has restricted access to the Marketplace and certain other sections of the Authorized Buyers UI based on the role granted to the associated client.
type ClientUserInput struct {
	Email *string `json:"email,omitempty"`
}
