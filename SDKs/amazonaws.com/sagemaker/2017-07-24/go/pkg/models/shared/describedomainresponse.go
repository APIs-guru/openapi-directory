package shared

import (
"time")

type DescribeDomainResponse struct {
    AppNetworkAccessType *AppNetworkAccessTypeEnum `json:"AppNetworkAccessType,omitempty"`
    AuthMode *AuthModeEnum `json:"AuthMode,omitempty"`
    CreationTime *time.Time `json:"CreationTime,omitempty"`
    DefaultUserSettings *UserSettings `json:"DefaultUserSettings,omitempty"`
    DomainArn *string `json:"DomainArn,omitempty"`
    DomainID *string `json:"DomainId,omitempty"`
    DomainName *string `json:"DomainName,omitempty"`
    FailureReason *string `json:"FailureReason,omitempty"`
    HomeEfsFileSystemID *string `json:"HomeEfsFileSystemId,omitempty"`
    HomeEfsFileSystemKmsKeyID *string `json:"HomeEfsFileSystemKmsKeyId,omitempty"`
    KmsKeyID *string `json:"KmsKeyId,omitempty"`
    LastModifiedTime *time.Time `json:"LastModifiedTime,omitempty"`
    SingleSignOnManagedApplicationInstanceID *string `json:"SingleSignOnManagedApplicationInstanceId,omitempty"`
    Status *DomainStatusEnum `json:"Status,omitempty"`
    SubnetIds []string `json:"SubnetIds,omitempty"`
    URL *string `json:"Url,omitempty"`
    VpcID *string `json:"VpcId,omitempty"`
    
}

