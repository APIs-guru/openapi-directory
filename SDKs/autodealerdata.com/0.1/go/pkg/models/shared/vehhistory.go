package shared

import (
	"time"
)

type VehHistory struct {
	DealerName string    `json:"dealerName"`
	FirstSeen  time.Time `json:"firstSeen"`
	LastSeen   time.Time `json:"lastSeen"`
	Miles      int64     `json:"miles"`
	New        bool      `json:"new"`
	Price      float64   `json:"price"`
	State      string    `json:"state"`
	Zip        int64     `json:"zip"`
}
