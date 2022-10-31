package shared

type GetAdministratorAccountResponse struct {
	Administrator *Invitation `json:"administrator,omitempty"`
}
