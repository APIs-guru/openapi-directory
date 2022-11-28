package shared

// PublishMetricAction
// Stateless inspection criteria that publishes the specified metrics to Amazon CloudWatch for the matching packet. This setting defines a CloudWatch dimension value to be published.
type PublishMetricAction struct {
	Dimensions []Dimension `json:"Dimensions"`
}
