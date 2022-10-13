package shared

type AwsRdsDbStatusInfo struct {
	Message    *string `json:"Message"`
	Normal     *bool   `json:"Normal"`
	Status     *string `json:"Status"`
	StatusType *string `json:"StatusType"`
}
