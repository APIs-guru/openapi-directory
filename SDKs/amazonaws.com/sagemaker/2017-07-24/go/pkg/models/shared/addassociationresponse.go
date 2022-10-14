package shared

type AddAssociationResponse struct {
	DestinationArn *string `json:"DestinationArn,omitempty"`
	SourceArn      *string `json:"SourceArn,omitempty"`
}
