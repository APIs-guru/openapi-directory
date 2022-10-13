package shared

type EndpointResponse struct {
	Address        *string              `json:"Address"`
	ApplicationID  *string              `json:"ApplicationId"`
	Attributes     map[string][]string  `json:"Attributes"`
	ChannelType    *ChannelTypeEnum     `json:"ChannelType"`
	CohortID       *string              `json:"CohortId"`
	CreationDate   *string              `json:"CreationDate"`
	Demographic    *EndpointDemographic `json:"Demographic"`
	EffectiveDate  *string              `json:"EffectiveDate"`
	EndpointStatus *string              `json:"EndpointStatus"`
	ID             *string              `json:"Id"`
	Location       *EndpointLocation    `json:"Location"`
	Metrics        map[string]float64   `json:"Metrics"`
	OptOut         *string              `json:"OptOut"`
	RequestID      *string              `json:"RequestId"`
	User           *EndpointUser        `json:"User"`
}
