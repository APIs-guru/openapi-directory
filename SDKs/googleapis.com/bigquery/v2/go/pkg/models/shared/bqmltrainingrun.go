package shared

import (
	"time"
)

type BqmlTrainingRunTrainingOptions struct {
	EarlyStop               *bool    `json:"earlyStop"`
	L1Reg                   *float64 `json:"l1Reg"`
	L2Reg                   *float64 `json:"l2Reg"`
	LearnRate               *float64 `json:"learnRate"`
	LearnRateStrategy       *string  `json:"learnRateStrategy"`
	LineSearchInitLearnRate *float64 `json:"lineSearchInitLearnRate"`
	MaxIteration            *string  `json:"maxIteration"`
	MinRelProgress          *float64 `json:"minRelProgress"`
	WarmStart               *bool    `json:"warmStart"`
}

type BqmlTrainingRun struct {
	IterationResults []BqmlIterationResult           `json:"iterationResults"`
	StartTime        *time.Time                      `json:"startTime"`
	State            *string                         `json:"state"`
	TrainingOptions  *BqmlTrainingRunTrainingOptions `json:"trainingOptions"`
}
