package shared

type KycCheck struct {
	Alert         *string `json:"alert"`
	DataRequired  *string `json:"dataRequired"`
	DetailMessage *string `json:"detailMessage"`
	DueDate       *string `json:"dueDate"`
	RemedyURL     *string `json:"remedyUrl"`
}
