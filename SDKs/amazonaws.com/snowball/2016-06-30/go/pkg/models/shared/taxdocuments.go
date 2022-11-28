package shared

// TaxDocuments
// The tax documents required in your AWS Region.
type TaxDocuments struct {
	Ind *IndTaxDocuments `json:"IND,omitempty"`
}
