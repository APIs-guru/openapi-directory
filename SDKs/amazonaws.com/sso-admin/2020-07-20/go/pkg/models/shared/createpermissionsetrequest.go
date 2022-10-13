package shared

type CreatePermissionSetRequest struct {
	Description     *string `json:"Description"`
	InstanceArn     string  `json:"InstanceArn"`
	Name            string  `json:"Name"`
	RelayState      *string `json:"RelayState"`
	SessionDuration *string `json:"SessionDuration"`
	Tags            []Tag   `json:"Tags"`
}
