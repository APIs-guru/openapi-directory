package shared

import (
"time")

type ClusterMetadata struct {
    AddressID *string `json:"AddressId,omitempty"`
    ClusterID *string `json:"ClusterId,omitempty"`
    ClusterState *ClusterStateEnum `json:"ClusterState,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    Description *string `json:"Description,omitempty"`
    ForwardingAddressID *string `json:"ForwardingAddressId,omitempty"`
    JobType *JobTypeEnum `json:"JobType,omitempty"`
    KmsKeyArn *string `json:"KmsKeyARN,omitempty"`
    Notification *Notification `json:"Notification,omitempty"`
    OnDeviceServiceConfiguration *OnDeviceServiceConfiguration `json:"OnDeviceServiceConfiguration,omitempty"`
    Resources *JobResource `json:"Resources,omitempty"`
    RoleArn *string `json:"RoleARN,omitempty"`
    ShippingOption *ShippingOptionEnum `json:"ShippingOption,omitempty"`
    SnowballType *SnowballTypeEnum `json:"SnowballType,omitempty"`
    TaxDocuments *TaxDocuments `json:"TaxDocuments,omitempty"`
    
}

