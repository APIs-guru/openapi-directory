package shared

type CodeScanningAnalysisDeletion struct {
	ConfirmDeleteURL string `json:"confirm_delete_url"`
	NextAnalysisURL  string `json:"next_analysis_url"`
}
