package shared

import (
"time")

type BqmlTrainingRunTrainingOptions struct {
    EarlyStop *bool `json:"earlyStop,omitempty"`
    L1Reg *float64 `json:"l1Reg,omitempty"`
    L2Reg *float64 `json:"l2Reg,omitempty"`
    LearnRate *float64 `json:"learnRate,omitempty"`
    LearnRateStrategy *string `json:"learnRateStrategy,omitempty"`
    LineSearchInitLearnRate *float64 `json:"lineSearchInitLearnRate,omitempty"`
    MaxIteration *string `json:"maxIteration,omitempty"`
    MinRelProgress *float64 `json:"minRelProgress,omitempty"`
    WarmStart *bool `json:"warmStart,omitempty"`
    
}

type BqmlTrainingRun struct {
    IterationResults []BqmlIterationResult `json:"iterationResults,omitempty"`
    StartTime *time.Time `json:"startTime,omitempty"`
    State *string `json:"state,omitempty"`
    TrainingOptions *BqmlTrainingRunTrainingOptions `json:"trainingOptions,omitempty"`
    
}

