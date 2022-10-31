package shared

type Transactions struct {
	Cashier   *string `json:"cashier,omitempty"`
	TimeStamp *int64  `json:"timeStamp,omitempty"`
	Txid      *string `json:"txid,omitempty"`
	Txtype    *string `json:"txtype,omitempty"`
	Value     *int64  `json:"value,omitempty"`
}
