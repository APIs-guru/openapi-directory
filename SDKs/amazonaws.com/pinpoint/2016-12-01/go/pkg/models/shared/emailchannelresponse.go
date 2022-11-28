package shared

// EmailChannelResponse
// Provides information about the status and settings of the email channel for an application.
type EmailChannelResponse struct {
	ApplicationID     *string `json:"ApplicationId,omitempty"`
	ConfigurationSet  *string `json:"ConfigurationSet,omitempty"`
	CreationDate      *string `json:"CreationDate,omitempty"`
	Enabled           *bool   `json:"Enabled,omitempty"`
	FromAddress       *string `json:"FromAddress,omitempty"`
	HasCredential     *bool   `json:"HasCredential,omitempty"`
	ID                *string `json:"Id,omitempty"`
	Identity          *string `json:"Identity,omitempty"`
	IsArchived        *bool   `json:"IsArchived,omitempty"`
	LastModifiedBy    *string `json:"LastModifiedBy,omitempty"`
	LastModifiedDate  *string `json:"LastModifiedDate,omitempty"`
	MessagesPerSecond *int64  `json:"MessagesPerSecond,omitempty"`
	Platform          string  `json:"Platform"`
	RoleArn           *string `json:"RoleArn,omitempty"`
	Version           *int64  `json:"Version,omitempty"`
}
