package shared

// AdminAccount
// Represents a Security Hub administrator account designated by an organization management account.
type AdminAccount struct {
	AccountID *string          `json:"AccountId,omitempty"`
	Status    *AdminStatusEnum `json:"Status,omitempty"`
}
