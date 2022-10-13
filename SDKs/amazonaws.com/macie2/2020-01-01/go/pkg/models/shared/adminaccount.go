package shared

type AdminAccount struct {
	AccountID *string          `json:"accountId"`
	Status    *AdminStatusEnum `json:"status"`
}
