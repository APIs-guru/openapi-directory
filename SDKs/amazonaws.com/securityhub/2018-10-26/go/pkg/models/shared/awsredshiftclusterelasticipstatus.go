package shared

type AwsRedshiftClusterElasticIPStatus struct {
	ElasticIP *string `json:"ElasticIp"`
	Status    *string `json:"Status"`
}
