package shared

// PrivateData
// Buyers are allowed to store certain types of private data in a proposal or deal.
type PrivateData struct {
	ReferenceID *string `json:"referenceId,omitempty"`
}
