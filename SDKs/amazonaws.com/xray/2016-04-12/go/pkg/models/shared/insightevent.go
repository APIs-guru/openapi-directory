package shared

import (
	"time"
)

// InsightEvent
// X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
type InsightEvent struct {
	ClientRequestImpactStatistics           *RequestImpactStatistics `json:"ClientRequestImpactStatistics,omitempty"`
	EventTime                               *time.Time               `json:"EventTime,omitempty"`
	RootCauseServiceRequestImpactStatistics *RequestImpactStatistics `json:"RootCauseServiceRequestImpactStatistics,omitempty"`
	Summary                                 *string                  `json:"Summary,omitempty"`
	TopAnomalousServices                    []AnomalousService       `json:"TopAnomalousServices,omitempty"`
}
