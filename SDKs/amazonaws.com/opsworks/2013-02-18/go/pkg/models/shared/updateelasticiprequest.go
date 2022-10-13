package shared

type UpdateElasticIPRequest struct {
	ElasticIP string  `json:"ElasticIp"`
	Name      *string `json:"Name"`
}
