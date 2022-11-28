package shared

// AdminAccount
// Provides information about the delegated Amazon Macie administrator account for an Amazon Web Services organization.
type AdminAccount struct {
	AccountID *string          `json:"accountId,omitempty"`
	Status    *AdminStatusEnum `json:"status,omitempty"`
}
