package shared

// AwsAPIGatewayAccessLogSettings
// Contains information about settings for logging access for the stage.
type AwsAPIGatewayAccessLogSettings struct {
	DestinationArn *string `json:"DestinationArn,omitempty"`
	Format         *string `json:"Format,omitempty"`
}
