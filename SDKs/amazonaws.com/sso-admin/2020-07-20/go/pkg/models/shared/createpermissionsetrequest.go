package shared

type CreatePermissionSetRequest struct {
	Description     *string `json:"Description,omitempty"`
	InstanceArn     string  `json:"InstanceArn"`
	Name            string  `json:"Name"`
	RelayState      *string `json:"RelayState,omitempty"`
	SessionDuration *string `json:"SessionDuration,omitempty"`
	Tags            []Tag   `json:"Tags,omitempty"`
}
