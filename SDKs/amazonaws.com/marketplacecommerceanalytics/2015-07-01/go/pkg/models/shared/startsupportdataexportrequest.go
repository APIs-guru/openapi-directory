package shared

import (
	"time"
)

type StartSupportDataExportRequest struct {
	CustomerDefinedValues   map[string]string      `json:"customerDefinedValues,omitempty"`
	DataSetType             SupportDataSetTypeEnum `json:"dataSetType"`
	DestinationS3BucketName string                 `json:"destinationS3BucketName"`
	DestinationS3Prefix     *string                `json:"destinationS3Prefix,omitempty"`
	FromDate                time.Time              `json:"fromDate"`
	RoleNameArn             string                 `json:"roleNameArn"`
	SnsTopicArn             string                 `json:"snsTopicArn"`
}
