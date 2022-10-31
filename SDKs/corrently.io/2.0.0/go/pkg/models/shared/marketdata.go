package shared

type MarketData struct {
	EndTimestamp   *int64   `json:"end_timestamp,omitempty"`
	Marketprice    *float64 `json:"marketprice,omitempty"`
	StartTimestamp *int64   `json:"start_timestamp,omitempty"`
}
