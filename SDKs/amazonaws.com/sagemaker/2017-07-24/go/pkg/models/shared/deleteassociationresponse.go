package shared

type DeleteAssociationResponse struct {
	DestinationArn *string `json:"DestinationArn,omitempty"`
	SourceArn      *string `json:"SourceArn,omitempty"`
}
