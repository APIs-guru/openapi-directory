package shared



type DissociateEntityFromThingRequest struct {
    EntityType EntityTypeEnum `json:"entityType"`
    ThingName string `json:"thingName"`
    
}

