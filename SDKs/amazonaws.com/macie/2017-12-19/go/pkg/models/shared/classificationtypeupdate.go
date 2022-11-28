package shared

// ClassificationTypeUpdate
// The classification type that Amazon Macie Classic applies to the associated S3 resources. At least one of the classification types (oneTime or continuous) must be specified.
type ClassificationTypeUpdate struct {
	Continuous *S3ContinuousClassificationTypeEnum `json:"continuous,omitempty"`
	OneTime    *S3OneTimeClassificationTypeEnum    `json:"oneTime,omitempty"`
}
