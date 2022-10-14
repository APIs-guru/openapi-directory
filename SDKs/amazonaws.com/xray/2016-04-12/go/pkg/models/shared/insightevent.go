package shared

import (
	"time"
)

type InsightEvent struct {
	ClientRequestImpactStatistics           *RequestImpactStatistics `json:"ClientRequestImpactStatistics,omitempty"`
	EventTime                               *time.Time               `json:"EventTime,omitempty"`
	RootCauseServiceRequestImpactStatistics *RequestImpactStatistics `json:"RootCauseServiceRequestImpactStatistics,omitempty"`
	Summary                                 *string                  `json:"Summary,omitempty"`
	TopAnomalousServices                    []AnomalousService       `json:"TopAnomalousServices,omitempty"`
}
