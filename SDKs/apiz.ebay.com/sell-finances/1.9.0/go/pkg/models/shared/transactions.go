package shared

// Transactions
// This is the base response type of the getTransactions method. The getTransactions response includes details on one or more monetary transactions that match the input criteria, as well as pagination data.
type Transactions struct {
	Href         *string       `json:"href,omitempty"`
	Limit        *int32        `json:"limit,omitempty"`
	Next         *string       `json:"next,omitempty"`
	Offset       *int32        `json:"offset,omitempty"`
	Prev         *string       `json:"prev,omitempty"`
	Total        *int32        `json:"total,omitempty"`
	Transactions []Transaction `json:"transactions,omitempty"`
}
