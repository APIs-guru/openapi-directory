package shared

type GetBlock struct {
	BlockNumber       string `json:"block_number"`
	Difficulty        string `json:"difficulty"`
	GasLimit          string `json:"gas_limit"`
	GasUsed           string `json:"gas_used"`
	Hash              string `json:"hash"`
	Miner             string `json:"miner"`
	Ok                bool   `json:"ok"`
	ParentHash        string `json:"parent_hash"`
	SizeInBytes       string `json:"size_in_bytes"`
	TimeStamp         string `json:"time_stamp"`
	TransactionsCount string `json:"transactions_count"`
}
