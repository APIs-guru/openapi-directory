package shared

import (
"time")

type ExperimentParentLink struct {
    Href *string `json:"href,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type ExperimentVariations struct {
    Name *string `json:"name,omitempty"`
    Status *string `json:"status,omitempty"`
    URL *string `json:"url,omitempty"`
    Weight *float64 `json:"weight,omitempty"`
    Won *bool `json:"won,omitempty"`
    
}

type Experiment struct {
    AccountID *string `json:"accountId,omitempty"`
    Created *time.Time `json:"created,omitempty"`
    Description *string `json:"description,omitempty"`
    EditableInGaUI *bool `json:"editableInGaUi,omitempty"`
    EndTime *time.Time `json:"endTime,omitempty"`
    EqualWeighting *bool `json:"equalWeighting,omitempty"`
    ID *string `json:"id,omitempty"`
    InternalWebPropertyID *string `json:"internalWebPropertyId,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MinimumExperimentLengthInDays *int32 `json:"minimumExperimentLengthInDays,omitempty"`
    Name *string `json:"name,omitempty"`
    ObjectiveMetric *string `json:"objectiveMetric,omitempty"`
    OptimizationType *string `json:"optimizationType,omitempty"`
    ParentLink *ExperimentParentLink `json:"parentLink,omitempty"`
    ProfileID *string `json:"profileId,omitempty"`
    ReasonExperimentEnded *string `json:"reasonExperimentEnded,omitempty"`
    RewriteVariationUrlsAsOriginal *bool `json:"rewriteVariationUrlsAsOriginal,omitempty"`
    SelfLink *string `json:"selfLink,omitempty"`
    ServingFramework *string `json:"servingFramework,omitempty"`
    Snippet *string `json:"snippet,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    Status *string `json:"status,omitempty"`
    TrafficCoverage *float64 `json:"trafficCoverage,omitempty"`
    Updated *time.Time `json:"updated,omitempty"`
    Variations []ExperimentVariations `json:"variations,omitempty"`
    WebPropertyID *string `json:"webPropertyId,omitempty"`
    WinnerConfidenceLevel *float64 `json:"winnerConfidenceLevel,omitempty"`
    WinnerFound *bool `json:"winnerFound,omitempty"`
    
}

