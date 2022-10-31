package shared



type NotificationSpecification struct {
    Destination string `json:"Destination"`
    EventTypes []EventTypeEnum `json:"EventTypes"`
    Transport NotificationTransportEnum `json:"Transport"`
    Version string `json:"Version"`
    
}

