package shared

type ReturnPolicyResponse struct {
	ReturnPolicies []ReturnPolicy `json:"returnPolicies,omitempty"`
	Warnings       []Error        `json:"warnings,omitempty"`
}
