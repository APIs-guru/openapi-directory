package shared

// CreateDownloadShareRequest
// Request model for creating a Download Share
type CreateDownloadShareRequest struct {
	CreatorLanguage       *string               `json:"creatorLanguage,omitempty"`
	Expiration            *ObjectExpiration     `json:"expiration,omitempty"`
	FileKey               *FileKey              `json:"fileKey,omitempty"`
	InternalNotes         *string               `json:"internalNotes,omitempty"`
	KeyPair               *UserKeyPairContainer `json:"keyPair,omitempty"`
	MailBody              *string               `json:"mailBody,omitempty"`
	MailRecipients        *string               `json:"mailRecipients,omitempty"`
	MailSubject           *string               `json:"mailSubject,omitempty"`
	MaxDownloads          *int32                `json:"maxDownloads,omitempty"`
	Name                  *string               `json:"name,omitempty"`
	NodeID                int64                 `json:"nodeId"`
	Notes                 *string               `json:"notes,omitempty"`
	NotifyCreator         *bool                 `json:"notifyCreator,omitempty"`
	Password              *string               `json:"password,omitempty"`
	ReceiverLanguage      *string               `json:"receiverLanguage,omitempty"`
	SendMail              *bool                 `json:"sendMail,omitempty"`
	SendSms               *bool                 `json:"sendSms,omitempty"`
	ShowCreatorName       *bool                 `json:"showCreatorName,omitempty"`
	ShowCreatorUsername   *bool                 `json:"showCreatorUsername,omitempty"`
	SmsRecipients         *string               `json:"smsRecipients,omitempty"`
	TextMessageRecipients []string              `json:"textMessageRecipients,omitempty"`
}
