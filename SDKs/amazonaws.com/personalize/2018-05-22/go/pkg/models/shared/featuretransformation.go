package shared

import (
	"time"
)

type FeatureTransformation struct {
	CreationDateTime         *time.Time        `json:"creationDateTime"`
	DefaultParameters        map[string]string `json:"defaultParameters"`
	FeatureTransformationArn *string           `json:"featureTransformationArn"`
	LastUpdatedDateTime      *time.Time        `json:"lastUpdatedDateTime"`
	Name                     *string           `json:"name"`
	Status                   *string           `json:"status"`
}
