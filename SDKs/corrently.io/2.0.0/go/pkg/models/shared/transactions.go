package shared

type Transactions struct {
	Cashier   *string `json:"cashier"`
	TimeStamp *int64  `json:"timeStamp"`
	Txid      *string `json:"txid"`
	Txtype    *string `json:"txtype"`
	Value     *int64  `json:"value"`
}
