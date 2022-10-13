package shared

type DeleteAssociationResponse struct {
	DestinationArn *string `json:"DestinationArn"`
	SourceArn      *string `json:"SourceArn"`
}
