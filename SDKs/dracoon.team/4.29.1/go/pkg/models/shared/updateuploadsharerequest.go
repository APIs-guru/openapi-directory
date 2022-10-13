package shared

type UpdateUploadShareRequest struct {
	DefaultCountry         *string           `json:"defaultCountry"`
	Expiration             *ObjectExpiration `json:"expiration"`
	FilesExpiryPeriod      *int32            `json:"filesExpiryPeriod"`
	InternalNotes          *string           `json:"internalNotes"`
	MaxSize                *int64            `json:"maxSize"`
	MaxSlots               *int32            `json:"maxSlots"`
	Name                   *string           `json:"name"`
	Notes                  *string           `json:"notes"`
	NotifyCreator          *bool             `json:"notifyCreator"`
	Password               *string           `json:"password"`
	ReceiverLanguage       *string           `json:"receiverLanguage"`
	ResetFilesExpiryPeriod *bool             `json:"resetFilesExpiryPeriod"`
	ResetMaxSize           *bool             `json:"resetMaxSize"`
	ResetMaxSlots          *bool             `json:"resetMaxSlots"`
	ResetPassword          *bool             `json:"resetPassword"`
	ShowCreatorName        *bool             `json:"showCreatorName"`
	ShowCreatorUsername    *bool             `json:"showCreatorUsername"`
	ShowUploadedFiles      *bool             `json:"showUploadedFiles"`
	TextMessageRecipients  []string          `json:"textMessageRecipients"`
}
