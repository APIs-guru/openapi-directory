package shared

// AdministratorWebToken
// A token authorizing an admin to access an iframe.
type AdministratorWebToken struct {
	Token *string `json:"token,omitempty"`
}
