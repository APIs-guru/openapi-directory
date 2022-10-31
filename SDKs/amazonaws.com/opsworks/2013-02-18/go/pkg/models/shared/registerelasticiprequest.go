package shared

type RegisterElasticIPRequest struct {
	ElasticIP string `json:"ElasticIp"`
	StackID   string `json:"StackId"`
}
