package shared

type ClassificationTypeUpdate struct {
	Continuous *S3ContinuousClassificationTypeEnum `json:"continuous"`
	OneTime    *S3OneTimeClassificationTypeEnum    `json:"oneTime"`
}
