package shared

type ReturnPolicyResponse struct {
	ReturnPolicies []ReturnPolicy `json:"returnPolicies"`
	Warnings       []Error        `json:"warnings"`
}
