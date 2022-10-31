package shared

import (
"time")

type FeatureTransformation struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    DefaultParameters map[string]string `json:"defaultParameters,omitempty"`
    FeatureTransformationArn *string `json:"featureTransformationArn,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

