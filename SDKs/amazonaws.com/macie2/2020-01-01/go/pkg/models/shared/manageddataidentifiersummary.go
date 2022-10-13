package shared

type ManagedDataIdentifierSummary struct {
	Category *SensitiveDataItemCategoryEnum `json:"category"`
	ID       *string                        `json:"id"`
}
