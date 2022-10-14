package shared

type AccountTreeRequest struct {
	AccountName     *string `json:"accountName,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	ProfileName     *string `json:"profileName,omitempty"`
	Timezone        *string `json:"timezone,omitempty"`
	WebpropertyName *string `json:"webpropertyName,omitempty"`
	WebsiteURL      *string `json:"websiteUrl,omitempty"`
}
