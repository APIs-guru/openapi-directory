package shared

type DeleteInstanceRequest struct {
	DeleteElasticIP *bool  `json:"DeleteElasticIp"`
	DeleteVolumes   *bool  `json:"DeleteVolumes"`
	InstanceID      string `json:"InstanceId"`
}
