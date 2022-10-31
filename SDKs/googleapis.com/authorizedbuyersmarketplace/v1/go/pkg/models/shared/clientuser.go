package shared




type ClientUserStateEnum string

const (
    ClientUserStateEnumStateUnspecified ClientUserStateEnum = "STATE_UNSPECIFIED"
ClientUserStateEnumInvited ClientUserStateEnum = "INVITED"
ClientUserStateEnumActive ClientUserStateEnum = "ACTIVE"
ClientUserStateEnumInactive ClientUserStateEnum = "INACTIVE"
)


type ClientUser struct {
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    State *ClientUserStateEnum `json:"state,omitempty"`
    
}

