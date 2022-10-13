package shared

type CreateUploadShareRequest struct {
	CreatorLanguage       *string           `json:"creatorLanguage"`
	Expiration            *ObjectExpiration `json:"expiration"`
	FilesExpiryPeriod     *int32            `json:"filesExpiryPeriod"`
	InternalNotes         *string           `json:"internalNotes"`
	MailBody              *string           `json:"mailBody"`
	MailRecipients        *string           `json:"mailRecipients"`
	MailSubject           *string           `json:"mailSubject"`
	MaxSize               *int64            `json:"maxSize"`
	MaxSlots              *int32            `json:"maxSlots"`
	Name                  *string           `json:"name"`
	Notes                 *string           `json:"notes"`
	NotifyCreator         *bool             `json:"notifyCreator"`
	Password              *string           `json:"password"`
	ReceiverLanguage      *string           `json:"receiverLanguage"`
	SendMail              *bool             `json:"sendMail"`
	SendSms               *bool             `json:"sendSms"`
	ShowCreatorName       *bool             `json:"showCreatorName"`
	ShowCreatorUsername   *bool             `json:"showCreatorUsername"`
	ShowUploadedFiles     *bool             `json:"showUploadedFiles"`
	SmsRecipients         *string           `json:"smsRecipients"`
	TargetID              int64             `json:"targetId"`
	TextMessageRecipients []string          `json:"textMessageRecipients"`
}
