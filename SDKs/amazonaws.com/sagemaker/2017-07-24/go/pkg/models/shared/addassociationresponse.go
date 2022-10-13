package shared

type AddAssociationResponse struct {
	DestinationArn *string `json:"DestinationArn"`
	SourceArn      *string `json:"SourceArn"`
}
