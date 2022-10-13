package shared

type ListDomainsInput struct {
	MaximumPageSize    *int64                 `json:"maximumPageSize"`
	NextPageToken      *string                `json:"nextPageToken"`
	RegistrationStatus RegistrationStatusEnum `json:"registrationStatus"`
	ReverseOrder       *bool                  `json:"reverseOrder"`
}
