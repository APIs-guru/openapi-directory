package shared

import (
	"time"
)

type InsightEvent struct {
	ClientRequestImpactStatistics           *RequestImpactStatistics `json:"ClientRequestImpactStatistics"`
	EventTime                               *time.Time               `json:"EventTime"`
	RootCauseServiceRequestImpactStatistics *RequestImpactStatistics `json:"RootCauseServiceRequestImpactStatistics"`
	Summary                                 *string                  `json:"Summary"`
	TopAnomalousServices                    []AnomalousService       `json:"TopAnomalousServices"`
}
