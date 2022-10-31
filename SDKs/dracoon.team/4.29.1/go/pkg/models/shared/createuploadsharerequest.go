package shared



type CreateUploadShareRequest struct {
    CreatorLanguage *string `json:"creatorLanguage,omitempty"`
    Expiration *ObjectExpiration `json:"expiration,omitempty"`
    FilesExpiryPeriod *int32 `json:"filesExpiryPeriod,omitempty"`
    InternalNotes *string `json:"internalNotes,omitempty"`
    MailBody *string `json:"mailBody,omitempty"`
    MailRecipients *string `json:"mailRecipients,omitempty"`
    MailSubject *string `json:"mailSubject,omitempty"`
    MaxSize *int64 `json:"maxSize,omitempty"`
    MaxSlots *int32 `json:"maxSlots,omitempty"`
    Name *string `json:"name,omitempty"`
    Notes *string `json:"notes,omitempty"`
    NotifyCreator *bool `json:"notifyCreator,omitempty"`
    Password *string `json:"password,omitempty"`
    ReceiverLanguage *string `json:"receiverLanguage,omitempty"`
    SendMail *bool `json:"sendMail,omitempty"`
    SendSms *bool `json:"sendSms,omitempty"`
    ShowCreatorName *bool `json:"showCreatorName,omitempty"`
    ShowCreatorUsername *bool `json:"showCreatorUsername,omitempty"`
    ShowUploadedFiles *bool `json:"showUploadedFiles,omitempty"`
    SmsRecipients *string `json:"smsRecipients,omitempty"`
    TargetID int64 `json:"targetId"`
    TextMessageRecipients []string `json:"textMessageRecipients,omitempty"`
    
}

