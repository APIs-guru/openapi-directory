package shared

type UpdateDownloadShareRequest struct {
	DefaultCountry        *string           `json:"defaultCountry"`
	Expiration            *ObjectExpiration `json:"expiration"`
	InternalNotes         *string           `json:"internalNotes"`
	MaxDownloads          *int32            `json:"maxDownloads"`
	Name                  *string           `json:"name"`
	Notes                 *string           `json:"notes"`
	NotifyCreator         *bool             `json:"notifyCreator"`
	Password              *string           `json:"password"`
	ReceiverLanguage      *string           `json:"receiverLanguage"`
	ResetMaxDownloads     *bool             `json:"resetMaxDownloads"`
	ResetPassword         *bool             `json:"resetPassword"`
	ShowCreatorName       *bool             `json:"showCreatorName"`
	ShowCreatorUsername   *bool             `json:"showCreatorUsername"`
	TextMessageRecipients []string          `json:"textMessageRecipients"`
}
