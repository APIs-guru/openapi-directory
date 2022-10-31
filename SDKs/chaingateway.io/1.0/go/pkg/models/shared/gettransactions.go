package shared

type GetTransactions struct {
	Ok           bool          `json:"ok"`
	Transactions []Transaction `json:"transactions"`
}
