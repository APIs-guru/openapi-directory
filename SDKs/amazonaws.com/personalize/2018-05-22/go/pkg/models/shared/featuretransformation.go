package shared

import (
	"time"
)

// FeatureTransformation
// Provides feature transformation information. Feature transformation is the process of modifying raw input data into a form more suitable for model training.
type FeatureTransformation struct {
	CreationDateTime         *time.Time        `json:"creationDateTime,omitempty"`
	DefaultParameters        map[string]string `json:"defaultParameters,omitempty"`
	FeatureTransformationArn *string           `json:"featureTransformationArn,omitempty"`
	LastUpdatedDateTime      *time.Time        `json:"lastUpdatedDateTime,omitempty"`
	Name                     *string           `json:"name,omitempty"`
	Status                   *string           `json:"status,omitempty"`
}
