package shared

type CodeScanningAlertInstanceMessage struct {
	Text *string `json:"text,omitempty"`
}

type CodeScanningAlertInstance struct {
	AnalysisKey     *string                               `json:"analysis_key,omitempty"`
	Classifications []CodeScanningAlertClassificationEnum `json:"classifications,omitempty"`
	CommitSha       *string                               `json:"commit_sha,omitempty"`
	Environment     *string                               `json:"environment,omitempty"`
	HTMLURL         *string                               `json:"html_url,omitempty"`
	Location        *CodeScanningAlertLocation            `json:"location,omitempty"`
	Message         *CodeScanningAlertInstanceMessage     `json:"message,omitempty"`
	Ref             *string                               `json:"ref,omitempty"`
	State           *CodeScanningAlertStateEnum           `json:"state,omitempty"`
}
