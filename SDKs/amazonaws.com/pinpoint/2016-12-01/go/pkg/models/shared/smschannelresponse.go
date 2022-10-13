package shared

type SmsChannelResponse struct {
	ApplicationID                  *string `json:"ApplicationId"`
	CreationDate                   *string `json:"CreationDate"`
	Enabled                        *bool   `json:"Enabled"`
	HasCredential                  *bool   `json:"HasCredential"`
	ID                             *string `json:"Id"`
	IsArchived                     *bool   `json:"IsArchived"`
	LastModifiedBy                 *string `json:"LastModifiedBy"`
	LastModifiedDate               *string `json:"LastModifiedDate"`
	Platform                       string  `json:"Platform"`
	PromotionalMessagesPerSecond   *int64  `json:"PromotionalMessagesPerSecond"`
	SenderID                       *string `json:"SenderId"`
	ShortCode                      *string `json:"ShortCode"`
	TransactionalMessagesPerSecond *int64  `json:"TransactionalMessagesPerSecond"`
	Version                        *int64  `json:"Version"`
}
