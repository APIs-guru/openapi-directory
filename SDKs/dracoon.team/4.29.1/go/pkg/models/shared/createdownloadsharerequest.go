package shared

type CreateDownloadShareRequest struct {
	CreatorLanguage       *string               `json:"creatorLanguage"`
	Expiration            *ObjectExpiration     `json:"expiration"`
	FileKey               *FileKey              `json:"fileKey"`
	InternalNotes         *string               `json:"internalNotes"`
	KeyPair               *UserKeyPairContainer `json:"keyPair"`
	MailBody              *string               `json:"mailBody"`
	MailRecipients        *string               `json:"mailRecipients"`
	MailSubject           *string               `json:"mailSubject"`
	MaxDownloads          *int32                `json:"maxDownloads"`
	Name                  *string               `json:"name"`
	NodeID                int64                 `json:"nodeId"`
	Notes                 *string               `json:"notes"`
	NotifyCreator         *bool                 `json:"notifyCreator"`
	Password              *string               `json:"password"`
	ReceiverLanguage      *string               `json:"receiverLanguage"`
	SendMail              *bool                 `json:"sendMail"`
	SendSms               *bool                 `json:"sendSms"`
	ShowCreatorName       *bool                 `json:"showCreatorName"`
	ShowCreatorUsername   *bool                 `json:"showCreatorUsername"`
	SmsRecipients         *string               `json:"smsRecipients"`
	TextMessageRecipients []string              `json:"textMessageRecipients"`
}
