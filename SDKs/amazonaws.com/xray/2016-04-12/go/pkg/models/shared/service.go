package shared

import (
	"time"
)

type Service struct {
	AccountID             *string            `json:"AccountId"`
	DurationHistogram     []HistogramEntry   `json:"DurationHistogram"`
	Edges                 []Edge             `json:"Edges"`
	EndTime               *time.Time         `json:"EndTime"`
	Name                  *string            `json:"Name"`
	Names                 []string           `json:"Names"`
	ReferenceID           *int64             `json:"ReferenceId"`
	ResponseTimeHistogram []HistogramEntry   `json:"ResponseTimeHistogram"`
	Root                  *bool              `json:"Root"`
	StartTime             *time.Time         `json:"StartTime"`
	State                 *string            `json:"State"`
	SummaryStatistics     *ServiceStatistics `json:"SummaryStatistics"`
	Type                  *string            `json:"Type"`
}
