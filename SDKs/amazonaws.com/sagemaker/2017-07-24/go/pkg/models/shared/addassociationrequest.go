package shared

type AddAssociationRequest struct {
	AssociationType *AssociationEdgeTypeEnum `json:"AssociationType"`
	DestinationArn  string                   `json:"DestinationArn"`
	SourceArn       string                   `json:"SourceArn"`
}
