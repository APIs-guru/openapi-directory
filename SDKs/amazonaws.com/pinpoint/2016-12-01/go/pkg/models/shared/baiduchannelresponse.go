package shared

type BaiduChannelResponse struct {
	ApplicationID    *string `json:"ApplicationId"`
	CreationDate     *string `json:"CreationDate"`
	Credential       string  `json:"Credential"`
	Enabled          *bool   `json:"Enabled"`
	HasCredential    *bool   `json:"HasCredential"`
	ID               *string `json:"Id"`
	IsArchived       *bool   `json:"IsArchived"`
	LastModifiedBy   *string `json:"LastModifiedBy"`
	LastModifiedDate *string `json:"LastModifiedDate"`
	Platform         string  `json:"Platform"`
	Version          *int64  `json:"Version"`
}
