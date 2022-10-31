package shared

type CreateResolverQueryLogConfigRequest struct {
	CreatorRequestID string `json:"CreatorRequestId"`
	DestinationArn   string `json:"DestinationArn"`
	Name             string `json:"Name"`
	Tags             []Tag  `json:"Tags,omitempty"`
}
