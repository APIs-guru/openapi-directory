package shared

// HpoObjective
// <p>The metric to optimize during hyperparameter optimization (HPO).</p> <note> <p>Amazon Personalize doesn't support configuring the <code>hpoObjective</code> at this time.</p> </note>
type HpoObjective struct {
	MetricName  *string `json:"metricName,omitempty"`
	MetricRegex *string `json:"metricRegex,omitempty"`
	Type        *string `json:"type,omitempty"`
}
