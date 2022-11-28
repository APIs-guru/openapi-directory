package shared

// PinpointDestination
// An object that defines a Amazon Pinpoint destination for email events. You can use Amazon Pinpoint events to create attributes in Amazon Pinpoint projects. You can use these attributes to create segments for your campaigns.
type PinpointDestination struct {
	ApplicationArn *string `json:"ApplicationArn,omitempty"`
}
