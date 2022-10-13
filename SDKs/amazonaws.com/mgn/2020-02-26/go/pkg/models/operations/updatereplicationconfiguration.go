package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReplicationConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum string

const (
	UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnumPrivateIP UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum = "PRIVATE_IP"
	UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnumPublicIP  UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum = "PUBLIC_IP"
)

type UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum string

const (
	UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnumGp2 UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum = "GP2"
	UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnumSt1 UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum = "ST1"
)

type UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum string

const (
	UpdateReplicationConfigurationRequestBodyEbsEncryptionEnumDefault UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum = "DEFAULT"
	UpdateReplicationConfigurationRequestBodyEbsEncryptionEnumCustom  UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum = "CUSTOM"
)

type UpdateReplicationConfigurationRequestBody struct {
	AssociateDefaultSecurityGroup       *bool                                                                     `json:"associateDefaultSecurityGroup"`
	BandwidthThrottling                 *int64                                                                    `json:"bandwidthThrottling"`
	CreatePublicIP                      *bool                                                                     `json:"createPublicIP"`
	DataPlaneRouting                    *UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum            `json:"dataPlaneRouting"`
	DefaultLargeStagingDiskType         *UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType"`
	EbsEncryption                       *UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum               `json:"ebsEncryption"`
	EbsEncryptionKeyArn                 *string                                                                   `json:"ebsEncryptionKeyArn"`
	Name                                *string                                                                   `json:"name"`
	ReplicatedDisks                     []shared.ReplicationConfigurationReplicatedDisk                           `json:"replicatedDisks"`
	ReplicationServerInstanceType       *string                                                                   `json:"replicationServerInstanceType"`
	ReplicationServersSecurityGroupsIDs []string                                                                  `json:"replicationServersSecurityGroupsIDs"`
	SourceServerID                      string                                                                    `json:"sourceServerID"`
	StagingAreaSubnetID                 *string                                                                   `json:"stagingAreaSubnetId"`
	StagingAreaTags                     map[string]string                                                         `json:"stagingAreaTags"`
	UseDedicatedReplicationServer       *bool                                                                     `json:"useDedicatedReplicationServer"`
}

type UpdateReplicationConfigurationRequest struct {
	Headers UpdateReplicationConfigurationHeaders
	Request UpdateReplicationConfigurationRequestBody `request:"mediaType=application/json"`
}

type UpdateReplicationConfigurationResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	ReplicationConfiguration      *shared.ReplicationConfiguration
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UninitializedAccountException *interface{}
	ValidationException           *interface{}
}
