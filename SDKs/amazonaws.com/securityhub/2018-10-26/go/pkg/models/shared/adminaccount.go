package shared

type AdminAccount struct {
	AccountID *string          `json:"AccountId"`
	Status    *AdminStatusEnum `json:"Status"`
}
