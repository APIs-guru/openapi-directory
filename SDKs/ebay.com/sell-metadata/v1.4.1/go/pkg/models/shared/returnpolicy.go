package shared

type ReturnPolicy struct {
	CategoryID     *string              `json:"categoryId,omitempty"`
	CategoryTreeID *string              `json:"categoryTreeId,omitempty"`
	Domestic       *ReturnPolicyDetails `json:"domestic,omitempty"`
	International  *ReturnPolicyDetails `json:"international,omitempty"`
	Required       *bool                `json:"required,omitempty"`
}
