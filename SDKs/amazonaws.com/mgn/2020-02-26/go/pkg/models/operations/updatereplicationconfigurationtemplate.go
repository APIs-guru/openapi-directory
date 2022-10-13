package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateReplicationConfigurationTemplateHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
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
	Arn                                 *string                                                                           `json:"arn"`
	AssociateDefaultSecurityGroup       *bool                                                                             `json:"associateDefaultSecurityGroup"`
	BandwidthThrottling                 *int64                                                                            `json:"bandwidthThrottling"`
	CreatePublicIP                      *bool                                                                             `json:"createPublicIP"`
	DataPlaneRouting                    *UpdateReplicationConfigurationTemplateRequestBodyDataPlaneRoutingEnum            `json:"dataPlaneRouting"`
	DefaultLargeStagingDiskType         *UpdateReplicationConfigurationTemplateRequestBodyDefaultLargeStagingDiskTypeEnum `json:"defaultLargeStagingDiskType"`
	EbsEncryption                       *UpdateReplicationConfigurationTemplateRequestBodyEbsEncryptionEnum               `json:"ebsEncryption"`
	EbsEncryptionKeyArn                 *string                                                                           `json:"ebsEncryptionKeyArn"`
	ReplicationConfigurationTemplateID  string                                                                            `json:"replicationConfigurationTemplateID"`
	ReplicationServerInstanceType       *string                                                                           `json:"replicationServerInstanceType"`
	ReplicationServersSecurityGroupsIDs []string                                                                          `json:"replicationServersSecurityGroupsIDs"`
	StagingAreaSubnetID                 *string                                                                           `json:"stagingAreaSubnetId"`
	StagingAreaTags                     map[string]string                                                                 `json:"stagingAreaTags"`
	UseDedicatedReplicationServer       *bool                                                                             `json:"useDedicatedReplicationServer"`
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
