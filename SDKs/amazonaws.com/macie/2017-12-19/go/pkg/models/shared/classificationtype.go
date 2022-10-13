package shared

type ClassificationType struct {
	Continuous S3ContinuousClassificationTypeEnum `json:"continuous"`
	OneTime    S3OneTimeClassificationTypeEnum    `json:"oneTime"`
}
