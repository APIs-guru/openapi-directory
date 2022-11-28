package shared

// AccountTreeRequest
// JSON template for an Analytics account tree requests. The account tree request is used in the provisioning api to create an account, property, and view (profile). It contains the basic information required to make these fields.
type AccountTreeRequest struct {
	AccountName     *string `json:"accountName,omitempty"`
	Kind            *string `json:"kind,omitempty"`
	ProfileName     *string `json:"profileName,omitempty"`
	Timezone        *string `json:"timezone,omitempty"`
	WebpropertyName *string `json:"webpropertyName,omitempty"`
	WebsiteURL      *string `json:"websiteUrl,omitempty"`
}
