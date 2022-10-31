package shared

type AssociateElasticIPRequest struct {
	ElasticIP  string  `json:"ElasticIp"`
	InstanceID *string `json:"InstanceId,omitempty"`
}
