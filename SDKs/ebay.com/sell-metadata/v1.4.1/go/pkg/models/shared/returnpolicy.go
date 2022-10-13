package shared

type ReturnPolicy struct {
	CategoryID     *string              `json:"categoryId"`
	CategoryTreeID *string              `json:"categoryTreeId"`
	Domestic       *ReturnPolicyDetails `json:"domestic"`
	International  *ReturnPolicyDetails `json:"international"`
	Required       *bool                `json:"required"`
}
