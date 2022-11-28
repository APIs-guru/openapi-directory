package shared

// ClassificationType
// The classification type that Amazon Macie Classic applies to the associated S3 resources.
type ClassificationType struct {
	Continuous S3ContinuousClassificationTypeEnum `json:"continuous"`
	OneTime    S3OneTimeClassificationTypeEnum    `json:"oneTime"`
}
