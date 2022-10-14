package shared

type AdminAccount struct {
	AccountID *string          `json:"AccountId,omitempty"`
	Status    *AdminStatusEnum `json:"Status,omitempty"`
}
