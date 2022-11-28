package shared

// SmsChannelResponse
// Provides information about the status and settings of the SMS channel for an application.
type SmsChannelResponse struct {
	ApplicationID                  *string `json:"ApplicationId,omitempty"`
	CreationDate                   *string `json:"CreationDate,omitempty"`
	Enabled                        *bool   `json:"Enabled,omitempty"`
	HasCredential                  *bool   `json:"HasCredential,omitempty"`
	ID                             *string `json:"Id,omitempty"`
	IsArchived                     *bool   `json:"IsArchived,omitempty"`
	LastModifiedBy                 *string `json:"LastModifiedBy,omitempty"`
	LastModifiedDate               *string `json:"LastModifiedDate,omitempty"`
	Platform                       string  `json:"Platform"`
	PromotionalMessagesPerSecond   *int64  `json:"PromotionalMessagesPerSecond,omitempty"`
	SenderID                       *string `json:"SenderId,omitempty"`
	ShortCode                      *string `json:"ShortCode,omitempty"`
	TransactionalMessagesPerSecond *int64  `json:"TransactionalMessagesPerSecond,omitempty"`
	Version                        *int64  `json:"Version,omitempty"`
}
