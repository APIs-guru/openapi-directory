package shared

import (
"time")

type GenerateDataSetRequest struct {
    CustomerDefinedValues map[string]string `json:"customerDefinedValues,omitempty"`
    DataSetPublicationDate time.Time `json:"dataSetPublicationDate"`
    DataSetType DataSetTypeEnum `json:"dataSetType"`
    DestinationS3BucketName string `json:"destinationS3BucketName"`
    DestinationS3Prefix *string `json:"destinationS3Prefix,omitempty"`
    RoleNameArn string `json:"roleNameArn"`
    SnsTopicArn string `json:"snsTopicArn"`
    
}

