package shared

type AccountTreeRequest struct {
	AccountName     *string `json:"accountName"`
	Kind            *string `json:"kind"`
	ProfileName     *string `json:"profileName"`
	Timezone        *string `json:"timezone"`
	WebpropertyName *string `json:"webpropertyName"`
	WebsiteURL      *string `json:"websiteUrl"`
}
