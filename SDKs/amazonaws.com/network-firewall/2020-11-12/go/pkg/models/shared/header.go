package shared

// Header
// The 5-tuple criteria for AWS Network Firewall to use to inspect packet headers in stateful traffic flow inspection. Traffic flows that match the criteria are a match for the corresponding <a>StatefulRule</a>.
type Header struct {
	Destination     string                    `json:"Destination"`
	DestinationPort string                    `json:"DestinationPort"`
	Direction       StatefulRuleDirectionEnum `json:"Direction"`
	Protocol        StatefulRuleProtocolEnum  `json:"Protocol"`
	Source          string                    `json:"Source"`
	SourcePort      string                    `json:"SourcePort"`
}
