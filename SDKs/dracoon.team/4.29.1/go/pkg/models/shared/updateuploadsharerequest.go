package shared

// UpdateUploadShareRequest
// Request model for updating an Upload Share
type UpdateUploadShareRequest struct {
	DefaultCountry         *string           `json:"defaultCountry,omitempty"`
	Expiration             *ObjectExpiration `json:"expiration,omitempty"`
	FilesExpiryPeriod      *int32            `json:"filesExpiryPeriod,omitempty"`
	InternalNotes          *string           `json:"internalNotes,omitempty"`
	MaxSize                *int64            `json:"maxSize,omitempty"`
	MaxSlots               *int32            `json:"maxSlots,omitempty"`
	Name                   *string           `json:"name,omitempty"`
	Notes                  *string           `json:"notes,omitempty"`
	NotifyCreator          *bool             `json:"notifyCreator,omitempty"`
	Password               *string           `json:"password,omitempty"`
	ReceiverLanguage       *string           `json:"receiverLanguage,omitempty"`
	ResetFilesExpiryPeriod *bool             `json:"resetFilesExpiryPeriod,omitempty"`
	ResetMaxSize           *bool             `json:"resetMaxSize,omitempty"`
	ResetMaxSlots          *bool             `json:"resetMaxSlots,omitempty"`
	ResetPassword          *bool             `json:"resetPassword,omitempty"`
	ShowCreatorName        *bool             `json:"showCreatorName,omitempty"`
	ShowCreatorUsername    *bool             `json:"showCreatorUsername,omitempty"`
	ShowUploadedFiles      *bool             `json:"showUploadedFiles,omitempty"`
	TextMessageRecipients  []string          `json:"textMessageRecipients,omitempty"`
}
