package shared

import (
	"time"
)

// Service
// Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used.
type Service struct {
	AccountID             *string            `json:"AccountId,omitempty"`
	DurationHistogram     []HistogramEntry   `json:"DurationHistogram,omitempty"`
	Edges                 []Edge             `json:"Edges,omitempty"`
	EndTime               *time.Time         `json:"EndTime,omitempty"`
	Name                  *string            `json:"Name,omitempty"`
	Names                 []string           `json:"Names,omitempty"`
	ReferenceID           *int64             `json:"ReferenceId,omitempty"`
	ResponseTimeHistogram []HistogramEntry   `json:"ResponseTimeHistogram,omitempty"`
	Root                  *bool              `json:"Root,omitempty"`
	StartTime             *time.Time         `json:"StartTime,omitempty"`
	State                 *string            `json:"State,omitempty"`
	SummaryStatistics     *ServiceStatistics `json:"SummaryStatistics,omitempty"`
	Type                  *string            `json:"Type,omitempty"`
}
