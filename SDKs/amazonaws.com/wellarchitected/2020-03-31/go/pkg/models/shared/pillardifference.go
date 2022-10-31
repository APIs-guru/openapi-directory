package shared



type PillarDifference struct {
    DifferenceStatus *DifferenceStatusEnum `json:"DifferenceStatus,omitempty"`
    PillarID *string `json:"PillarId,omitempty"`
    QuestionDifferences []QuestionDifference `json:"QuestionDifferences,omitempty"`
    
}

