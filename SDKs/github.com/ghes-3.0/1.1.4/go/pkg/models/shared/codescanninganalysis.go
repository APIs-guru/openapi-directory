package shared

import (
	"time"
)

type CodeScanningAnalysis struct {
	AnalysisKey  string                   `json:"analysis_key"`
	Category     *string                  `json:"category,omitempty"`
	CommitSha    string                   `json:"commit_sha"`
	CreatedAt    time.Time                `json:"created_at"`
	Deletable    bool                     `json:"deletable"`
	Environment  string                   `json:"environment"`
	Error        string                   `json:"error"`
	ID           int64                    `json:"id"`
	Ref          string                   `json:"ref"`
	ResultsCount int64                    `json:"results_count"`
	RulesCount   int64                    `json:"rules_count"`
	SarifID      string                   `json:"sarif_id"`
	Tool         CodeScanningAnalysisTool `json:"tool"`
	URL          string                   `json:"url"`
	Warning      string                   `json:"warning"`
}
