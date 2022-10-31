package shared

type ClassificationTypeUpdate struct {
	Continuous *S3ContinuousClassificationTypeEnum `json:"continuous,omitempty"`
	OneTime    *S3OneTimeClassificationTypeEnum    `json:"oneTime,omitempty"`
}
