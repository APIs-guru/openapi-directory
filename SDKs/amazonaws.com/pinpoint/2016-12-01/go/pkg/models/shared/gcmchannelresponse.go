package shared

// GcmChannelResponse
// Provides information about the status and settings of the GCM channel for an application. The GCM channel enables Amazon Pinpoint to send push notifications through the Firebase Cloud Messaging (FCM), formerly Google Cloud Messaging (GCM), service.
type GcmChannelResponse struct {
	ApplicationID    *string `json:"ApplicationId,omitempty"`
	CreationDate     *string `json:"CreationDate,omitempty"`
	Credential       string  `json:"Credential"`
	Enabled          *bool   `json:"Enabled,omitempty"`
	HasCredential    *bool   `json:"HasCredential,omitempty"`
	ID               *string `json:"Id,omitempty"`
	IsArchived       *bool   `json:"IsArchived,omitempty"`
	LastModifiedBy   *string `json:"LastModifiedBy,omitempty"`
	LastModifiedDate *string `json:"LastModifiedDate,omitempty"`
	Platform         string  `json:"Platform"`
	Version          *int64  `json:"Version,omitempty"`
}
