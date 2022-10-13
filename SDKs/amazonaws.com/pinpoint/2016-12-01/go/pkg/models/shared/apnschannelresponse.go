package shared

type ApnsChannelResponse struct {
	ApplicationID               *string `json:"ApplicationId"`
	CreationDate                *string `json:"CreationDate"`
	DefaultAuthenticationMethod *string `json:"DefaultAuthenticationMethod"`
	Enabled                     *bool   `json:"Enabled"`
	HasCredential               *bool   `json:"HasCredential"`
	HasTokenKey                 *bool   `json:"HasTokenKey"`
	ID                          *string `json:"Id"`
	IsArchived                  *bool   `json:"IsArchived"`
	LastModifiedBy              *string `json:"LastModifiedBy"`
	LastModifiedDate            *string `json:"LastModifiedDate"`
	Platform                    string  `json:"Platform"`
	Version                     *int64  `json:"Version"`
}
