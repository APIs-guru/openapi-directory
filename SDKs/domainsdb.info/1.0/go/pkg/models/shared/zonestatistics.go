package shared

import (
	"time"
)

type ZoneStatistics struct {
	Date  time.Time `json:"date"`
	Dec   int64     `json:"dec"`
	Inc   int64     `json:"inc"`
	Total int64     `json:"total"`
	Zone  string    `json:"zone"`
}
