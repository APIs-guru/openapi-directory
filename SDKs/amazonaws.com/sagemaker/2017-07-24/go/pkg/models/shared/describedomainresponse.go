package shared

import (
	"time"
)

type DescribeDomainResponse struct {
	AppNetworkAccessType                     *AppNetworkAccessTypeEnum `json:"AppNetworkAccessType"`
	AuthMode                                 *AuthModeEnum             `json:"AuthMode"`
	CreationTime                             *time.Time                `json:"CreationTime"`
	DefaultUserSettings                      *UserSettings             `json:"DefaultUserSettings"`
	DomainArn                                *string                   `json:"DomainArn"`
	DomainID                                 *string                   `json:"DomainId"`
	DomainName                               *string                   `json:"DomainName"`
	FailureReason                            *string                   `json:"FailureReason"`
	HomeEfsFileSystemID                      *string                   `json:"HomeEfsFileSystemId"`
	HomeEfsFileSystemKmsKeyID                *string                   `json:"HomeEfsFileSystemKmsKeyId"`
	KmsKeyID                                 *string                   `json:"KmsKeyId"`
	LastModifiedTime                         *time.Time                `json:"LastModifiedTime"`
	SingleSignOnManagedApplicationInstanceID *string                   `json:"SingleSignOnManagedApplicationInstanceId"`
	Status                                   *DomainStatusEnum         `json:"Status"`
	SubnetIds                                []string                  `json:"SubnetIds"`
	URL                                      *string                   `json:"Url"`
	VpcID                                    *string                   `json:"VpcId"`
}
