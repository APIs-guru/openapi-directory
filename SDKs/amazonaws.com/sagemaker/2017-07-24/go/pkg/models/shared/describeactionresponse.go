package shared

import (
	"time"
)

type DescribeActionResponse struct {
	ActionArn          *string             `json:"ActionArn"`
	ActionName         *string             `json:"ActionName"`
	ActionType         *string             `json:"ActionType"`
	CreatedBy          *UserContext        `json:"CreatedBy"`
	CreationTime       *time.Time          `json:"CreationTime"`
	Description        *string             `json:"Description"`
	LastModifiedBy     *UserContext        `json:"LastModifiedBy"`
	LastModifiedTime   *time.Time          `json:"LastModifiedTime"`
	MetadataProperties *MetadataProperties `json:"MetadataProperties"`
	Properties         map[string]string   `json:"Properties"`
	Source             *ActionSource       `json:"Source"`
	Status             *ActionStatusEnum   `json:"Status"`
}
