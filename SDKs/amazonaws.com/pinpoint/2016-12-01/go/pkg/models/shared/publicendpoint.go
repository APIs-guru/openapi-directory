package shared

type PublicEndpoint struct {
	Address        *string              `json:"Address"`
	Attributes     map[string][]string  `json:"Attributes"`
	ChannelType    *ChannelTypeEnum     `json:"ChannelType"`
	Demographic    *EndpointDemographic `json:"Demographic"`
	EffectiveDate  *string              `json:"EffectiveDate"`
	EndpointStatus *string              `json:"EndpointStatus"`
	Location       *EndpointLocation    `json:"Location"`
	Metrics        map[string]float64   `json:"Metrics"`
	OptOut         *string              `json:"OptOut"`
	RequestID      *string              `json:"RequestId"`
	User           *EndpointUser        `json:"User"`
}
