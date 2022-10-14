package shared

type ElasticIP struct {
	Domain     *string `json:"Domain,omitempty"`
	InstanceID *string `json:"InstanceId,omitempty"`
	IP         *string `json:"Ip,omitempty"`
	Name       *string `json:"Name,omitempty"`
	Region     *string `json:"Region,omitempty"`
}
