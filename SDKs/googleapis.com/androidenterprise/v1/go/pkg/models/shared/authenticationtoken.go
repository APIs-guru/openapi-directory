package shared

// AuthenticationToken
// An AuthenticationToken is used by the EMM's device policy client on a device to provision the given EMM-managed user on that device.
type AuthenticationToken struct {
	Token *string `json:"token,omitempty"`
}
