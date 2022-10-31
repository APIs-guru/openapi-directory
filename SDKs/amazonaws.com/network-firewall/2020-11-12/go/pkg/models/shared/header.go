package shared



type Header struct {
    Destination string `json:"Destination"`
    DestinationPort string `json:"DestinationPort"`
    Direction StatefulRuleDirectionEnum `json:"Direction"`
    Protocol StatefulRuleProtocolEnum `json:"Protocol"`
    Source string `json:"Source"`
    SourcePort string `json:"SourcePort"`
    
}

