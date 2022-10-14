package operations

import (
	"openapi/pkg/models/shared"
)

type CreateReplicationConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum string

const (
	CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPrivateIP CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = "PRIVATE_IP"
	CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPublicIP  CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = "PUBLIC_IP"
)

type CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum string

const (
	CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumGp2 CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = "GP2"
	CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumSt1 CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = "ST1"
)

type CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum string

const (
	CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumDefault CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = "DEFAULT"
	CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumCustom  CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = "CUSTOM"
)

type CreateReplicationConfigurationTemplateRequestBody struct {
	AssociateDefaultSecurityGroup       bool                                                                             `json:"associateDefaultSecurityGroup"`
	BandwidthThrottling                 int64                                                                            `json:"bandwidthThrottling"`
	CreatePublicIP                      bool                                                                             `json:"createPublicIP"`
	DataPlaneRouting                    CreateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum            `json:"dataPlaneRouting"`
	DefaultLargeStagingDiskType         CreateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType"`
	EbsEncryption                       CreateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum               `json:"ebsEncryption"`
	EbsEncryptionKeyArn                 *string                                                                          `json:"ebsEncryptionKeyArn,omitempty"`
	ReplicationServerInstanceType       string                                                                           `json:"replicationServerInstanceType"`
	ReplicationServersSecurityGroupsIDs []string                                                                         `json:"replicationServersSecurityGroupsIDs"`
	StagingAreaSubnetID                 string                                                                           `json:"stagingAreaSubnetId"`
	StagingAreaTags                     map[string]string                                                                `json:"stagingAreaTags"`
	Tags                                map[string]string                                                                `json:"tags,omitempty"`
	UseDedicatedReplicationServer       bool                                                                             `json:"useDedicatedReplicationServer"`
}

type CreateReplicationConfigurationTemplateRequest struct {
	Headers CreateReplicationConfigurationTemplateHeaders
	Request CreateReplicationConfigurationTemplateRequestBody `request:"mediaType=application/json"`
}

type CreateReplicationConfigurationTemplateResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	ReplicationConfigurationTemplate *shared.ReplicationConfigurationTemplate
	StatusCode                       int64
	UninitializedAccountException    *interface{}
	ValidationException              *interface{}
}
