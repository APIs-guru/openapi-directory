package shared

type ManagedDataIdentifierSummary struct {
	Category *SensitiveDataItemCategoryEnum `json:"category,omitempty"`
	ID       *string                        `json:"id,omitempty"`
}
