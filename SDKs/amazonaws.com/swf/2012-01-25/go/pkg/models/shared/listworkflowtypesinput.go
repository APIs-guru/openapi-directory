package shared

type ListWorkflowTypesInput struct {
	Domain             string                 `json:"domain"`
	MaximumPageSize    *int64                 `json:"maximumPageSize"`
	Name               *string                `json:"name"`
	NextPageToken      *string                `json:"nextPageToken"`
	RegistrationStatus RegistrationStatusEnum `json:"registrationStatus"`
	ReverseOrder       *bool                  `json:"reverseOrder"`
}
