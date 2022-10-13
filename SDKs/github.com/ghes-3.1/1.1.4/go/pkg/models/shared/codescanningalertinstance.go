package shared

type CodeScanningAlertInstanceMessage struct {
	Text *string `json:"text"`
}

type CodeScanningAlertInstance struct {
	AnalysisKey     *string                               `json:"analysis_key"`
	Classifications []CodeScanningAlertClassificationEnum `json:"classifications"`
	CommitSha       *string                               `json:"commit_sha"`
	Environment     *string                               `json:"environment"`
	HTMLURL         *string                               `json:"html_url"`
	Location        *CodeScanningAlertLocation            `json:"location"`
	Message         *CodeScanningAlertInstanceMessage     `json:"message"`
	Ref             *string                               `json:"ref"`
	State           *CodeScanningAlertStateEnum           `json:"state"`
}
