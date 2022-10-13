package shared

type ElasticIP struct {
	Domain     *string `json:"Domain"`
	InstanceID *string `json:"InstanceId"`
	IP         *string `json:"Ip"`
	Name       *string `json:"Name"`
	Region     *string `json:"Region"`
}
