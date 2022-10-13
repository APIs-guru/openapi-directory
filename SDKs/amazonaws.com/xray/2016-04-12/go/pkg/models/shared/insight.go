package shared

import (
	"time"
)

type Insight struct {
	Categories                              []InsightCategoryEnum    `json:"Categories"`
	ClientRequestImpactStatistics           *RequestImpactStatistics `json:"ClientRequestImpactStatistics"`
	EndTime                                 *time.Time               `json:"EndTime"`
	GroupArn                                *string                  `json:"GroupARN"`
	GroupName                               *string                  `json:"GroupName"`
	InsightID                               *string                  `json:"InsightId"`
	RootCauseServiceID                      *ServiceID               `json:"RootCauseServiceId"`
	RootCauseServiceRequestImpactStatistics *RequestImpactStatistics `json:"RootCauseServiceRequestImpactStatistics"`
	StartTime                               *time.Time               `json:"StartTime"`
	State                                   *InsightStateEnum        `json:"State"`
	Summary                                 *string                  `json:"Summary"`
	TopAnomalousServices                    []AnomalousService       `json:"TopAnomalousServices"`
}
