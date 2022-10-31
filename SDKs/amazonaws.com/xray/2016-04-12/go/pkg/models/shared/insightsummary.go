package shared

import (
"time")

type InsightSummary struct {
    Categories []InsightCategoryEnum `json:"Categories,omitempty"`
    ClientRequestImpactStatistics *RequestImpactStatistics `json:"ClientRequestImpactStatistics,omitempty"`
    EndTime *time.Time `json:"EndTime,omitempty"`
    GroupArn *string `json:"GroupARN,omitempty"`
    GroupName *string `json:"GroupName,omitempty"`
    InsightID *string `json:"InsightId,omitempty"`
    LastUpdateTime *time.Time `json:"LastUpdateTime,omitempty"`
    RootCauseServiceID *ServiceID `json:"RootCauseServiceId,omitempty"`
    RootCauseServiceRequestImpactStatistics *RequestImpactStatistics `json:"RootCauseServiceRequestImpactStatistics,omitempty"`
    StartTime *time.Time `json:"StartTime,omitempty"`
    State *InsightStateEnum `json:"State,omitempty"`
    Summary *string `json:"Summary,omitempty"`
    TopAnomalousServices []AnomalousService `json:"TopAnomalousServices,omitempty"`
    
}

