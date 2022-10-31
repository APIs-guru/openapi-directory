package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReplicationConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum string

const (
	UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPrivateIP UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = "PRIVATE_IP"
	UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnumPublicIP  UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum = "PUBLIC_IP"
)

type UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum string

const (
	UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumGp2 UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = "GP2"
	UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnumSt1 UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum = "ST1"
)

type UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum string

const (
	UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumDefault UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = "DEFAULT"
	UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnumCustom  UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum = "CUSTOM"
)

type UpdateReplicationConfigurationTemplateRequestBody struct {
	Arn                                 *string                                                                           `json:"arn,omitempty"`
	AssociateDefaultSecurityGroup       *bool                                                                             `json:"associateDefaultSecurityGroup,omitempty"`
	BandwidthThrottling                 *int64                                                                            `json:"bandwidthThrottling,omitempty"`
	CreatePublicIP                      *bool                                                                             `json:"createPublicIP,omitempty"`
	DataPlaneRouting                    *UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum            `json:"dataPlaneRouting,omitempty"`
	DefaultLargeStagingDiskType         *UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType,omitempty"`
	EbsEncryption                       *UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum               `json:"ebsEncryption,omitempty"`
	EbsEncryptionKeyArn                 *string                                                                           `json:"ebsEncryptionKeyArn,omitempty"`
	ReplicationConfigurationTemplateID  string                                                                            `json:"replicationConfigurationTemplateID"`
	ReplicationServerInstanceType       *string                                                                           `json:"replicationServerInstanceType,omitempty"`
	ReplicationServersSecurityGroupsIDs []string                                                                          `json:"replicationServersSecurityGroupsIDs,omitempty"`
	StagingAreaSubnetID                 *string                                                                           `json:"stagingAreaSubnetId,omitempty"`
	StagingAreaTags                     map[string]string                                                                 `json:"stagingAreaTags,omitempty"`
	UseDedicatedReplicationServer       *bool                                                                             `json:"useDedicatedReplicationServer,omitempty"`
}

type UpdateReplicationConfigurationTemplateRequest struct {
	Headers UpdateReplicationConfigurationTemplateHeaders
	Request UpdateReplicationConfigurationTemplateRequestBody `request:"mediaType=application/json"`
}

type UpdateReplicationConfigurationTemplateResponse struct {
	AccessDeniedException            *interface{}
	ContentType                      string
	ReplicationConfigurationTemplate *shared.ReplicationConfigurationTemplate
	ResourceNotFoundException        *interface{}
	StatusCode                       int64
	UninitializedAccountException    *interface{}
	ValidationException              *interface{}
}
