package shared

// VoiceChannelResponse
// Provides information about the status and settings of the voice channel for an application.
type VoiceChannelResponse struct {
	ApplicationID    *string `json:"ApplicationId,omitempty"`
	CreationDate     *string `json:"CreationDate,omitempty"`
	Enabled          *bool   `json:"Enabled,omitempty"`
	HasCredential    *bool   `json:"HasCredential,omitempty"`
	ID               *string `json:"Id,omitempty"`
	IsArchived       *bool   `json:"IsArchived,omitempty"`
	LastModifiedBy   *string `json:"LastModifiedBy,omitempty"`
	LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
	Platform         string  `json:"Platform"`
	Version          *int64  `json:"Version,omitempty"`
}
