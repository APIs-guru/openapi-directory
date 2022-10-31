package shared

type ListDomainsInput struct {
	MaximumPageSize    *int64                 `json:"maximumPageSize,omitempty"`
	NextPageToken      *string                `json:"nextPageToken,omitempty"`
	RegistrationStatus RegistrationStatusEnum `json:"registrationStatus"`
	ReverseOrder       *bool                  `json:"reverseOrder,omitempty"`
}
