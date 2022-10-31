package shared



type AddAssociationRequest struct {
    AssociationType *AssociationEdgeTypeEnum `json:"AssociationType,omitempty"`
    DestinationArn string `json:"DestinationArn"`
    SourceArn string `json:"SourceArn"`
    
}

