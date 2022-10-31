package shared

type ChannelResponse struct {
	ApplicationID    *string `json:"ApplicationId,omitempty"`
	CreationDate     *string `json:"CreationDate,omitempty"`
	Enabled          *bool   `json:"Enabled,omitempty"`
	HasCredential    *bool   `json:"HasCredential,omitempty"`
	ID               *string `json:"Id,omitempty"`
	IsArchived       *bool   `json:"IsArchived,omitempty"`
	LastModifiedBy   *string `json:"LastModifiedBy,omitempty"`
	LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
	Version          *int64  `json:"Version,omitempty"`
}
