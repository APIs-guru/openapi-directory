package shared

type ClientUserStateEnum string

const (
	ClientUserStateEnumStateUnspecified ClientUserStateEnum = "STATE_UNSPECIFIED"
	ClientUserStateEnumInvited          ClientUserStateEnum = "INVITED"
	ClientUserStateEnumActive           ClientUserStateEnum = "ACTIVE"
	ClientUserStateEnumInactive         ClientUserStateEnum = "INACTIVE"
)

type ClientUser struct {
	Email *string              `json:"email"`
	Name  *string              `json:"name"`
	State *ClientUserStateEnum `json:"state"`
}
