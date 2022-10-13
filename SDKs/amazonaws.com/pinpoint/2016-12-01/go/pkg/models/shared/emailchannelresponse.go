package shared

type EmailChannelResponse struct {
	ApplicationID     *string `json:"ApplicationId"`
	ConfigurationSet  *string `json:"ConfigurationSet"`
	CreationDate      *string `json:"CreationDate"`
	Enabled           *bool   `json:"Enabled"`
	FromAddress       *string `json:"FromAddress"`
	HasCredential     *bool   `json:"HasCredential"`
	ID                *string `json:"Id"`
	Identity          *string `json:"Identity"`
	IsArchived        *bool   `json:"IsArchived"`
	LastModifiedBy    *string `json:"LastModifiedBy"`
	LastModifiedDate  *string `json:"LastModifiedDate"`
	MessagesPerSecond *int64  `json:"MessagesPerSecond"`
	Platform          string  `json:"Platform"`
	RoleArn           *string `json:"RoleArn"`
	Version           *int64  `json:"Version"`
}
