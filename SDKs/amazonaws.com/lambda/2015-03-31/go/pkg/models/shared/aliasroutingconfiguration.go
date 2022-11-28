package shared

// AliasRoutingConfiguration
// The <a href="https://docs.aws.amazon.com/lambda/latest/dg/lambda-traffic-shifting-using-aliases.html">traffic-shifting</a> configuration of a Lambda function alias.
type AliasRoutingConfiguration struct {
	AdditionalVersionWeights map[string]float64 `json:"AdditionalVersionWeights,omitempty"`
}
