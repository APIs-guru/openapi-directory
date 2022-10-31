package shared

type KycCheck struct {
	Alert         *string `json:"alert,omitempty"`
	DataRequired  *string `json:"dataRequired,omitempty"`
	DetailMessage *string `json:"detailMessage,omitempty"`
	DueDate       *string `json:"dueDate,omitempty"`
	RemedyURL     *string `json:"remedyUrl,omitempty"`
}
