package shared

type MarketData struct {
	EndTimestamp   *int64   `json:"end_timestamp"`
	Marketprice    *float64 `json:"marketprice"`
	StartTimestamp *int64   `json:"start_timestamp"`
}
