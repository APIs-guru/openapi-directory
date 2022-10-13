package shared

type ChannelResponse struct {
	ApplicationID    *string `json:"ApplicationId"`
	CreationDate     *string `json:"CreationDate"`
	Enabled          *bool   `json:"Enabled"`
	HasCredential    *bool   `json:"HasCredential"`
	ID               *string `json:"Id"`
	IsArchived       *bool   `json:"IsArchived"`
	LastModifiedBy   *string `json:"LastModifiedBy"`
	LastModifiedDate *string `json:"LastModifiedDate"`
	Version          *int64  `json:"Version"`
}
