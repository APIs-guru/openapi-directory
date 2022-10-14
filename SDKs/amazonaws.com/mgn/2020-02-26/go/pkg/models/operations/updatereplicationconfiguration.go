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
	AssociateDefaultSecurityGroup       *bool                                                                     `json:"associateDefaultSecurityGroup,omitempty"`
	BandwidthThrottling                 *int64                                                                    `json:"bandwidthThrottling,omitempty"`
	CreatePublicIP                      *bool                                                                     `json:"createPublicIP,omitempty"`
	DataPlaneRouting                    *UpdateReplicationConfigurationRequestBodyDataPlaneRoutingEnum            `json:"dataPlaneRouting,omitempty"`
	DefaultLargeStagingDiskType         *UpdateReplicationConfigurationRequestBodyDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType,omitempty"`
	EbsEncryption                       *UpdateReplicationConfigurationRequestBodyEbsEncryptionEnum               `json:"ebsEncryption,omitempty"`
	EbsEncryptionKeyArn                 *string                                                                   `json:"ebsEncryptionKeyArn,omitempty"`
	Name                                *string                                                                   `json:"name,omitempty"`
	ReplicatedDisks                     []shared.ReplicationConfigurationReplicatedDisk                           `json:"replicatedDisks,omitempty"`
	ReplicationServerInstanceType       *string                                                                   `json:"replicationServerInstanceType,omitempty"`
	ReplicationServersSecurityGroupsIDs []string                                                                  `json:"replicationServersSecurityGroupsIDs,omitempty"`
	SourceServerID                      string                                                                    `json:"sourceServerID"`
	StagingAreaSubnetID                 *string                                                                   `json:"stagingAreaSubnetId,omitempty"`
	StagingAreaTags                     map[string]string                                                         `json:"stagingAreaTags,omitempty"`
	UseDedicatedReplicationServer       *bool                                                                     `json:"useDedicatedReplicationServer,omitempty"`
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
