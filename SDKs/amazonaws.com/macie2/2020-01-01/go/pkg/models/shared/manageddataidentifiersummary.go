package shared

// ManagedDataIdentifierSummary
// Provides information about a managed data identifier. For additional information, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
type ManagedDataIdentifierSummary struct {
	Category *SensitiveDataItemCategoryEnum `json:"category,omitempty"`
	ID       *string                        `json:"id,omitempty"`
}
