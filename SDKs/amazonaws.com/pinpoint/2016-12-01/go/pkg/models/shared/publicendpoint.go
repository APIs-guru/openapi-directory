package shared

type PublicEndpoint struct {
	Address        *string              `json:"Address,omitempty"`
	Attributes     map[string][]string  `json:"Attributes,omitempty"`
	ChannelType    *ChannelTypeEnum     `json:"ChannelType,omitempty"`
	Demographic    *EndpointDemographic `json:"Demographic,omitempty"`
	EffectiveDate  *string              `json:"EffectiveDate,omitempty"`
	EndpointStatus *string              `json:"EndpointStatus,omitempty"`
	Location       *EndpointLocation    `json:"Location,omitempty"`
	Metrics        map[string]float64   `json:"Metrics,omitempty"`
	OptOut         *string              `json:"OptOut,omitempty"`
	RequestID      *string              `json:"RequestId,omitempty"`
	User           *EndpointUser        `json:"User,omitempty"`
}
