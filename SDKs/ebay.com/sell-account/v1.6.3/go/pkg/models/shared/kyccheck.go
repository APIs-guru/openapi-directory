package shared

// KycCheck
// This type is used to provide details about any KYC check that is applicable to the managed payments seller.
type KycCheck struct {
	Alert         *string `json:"alert,omitempty"`
	DataRequired  *string `json:"dataRequired,omitempty"`
	DetailMessage *string `json:"detailMessage,omitempty"`
	DueDate       *string `json:"dueDate,omitempty"`
	RemedyURL     *string `json:"remedyUrl,omitempty"`
}
