package shared

type TrustedAdvisorCheckRefreshStatus struct {
	CheckID                    string `json:"checkId"`
	MillisUntilNextRefreshable int64  `json:"millisUntilNextRefreshable"`
	Status                     string `json:"status"`
}
