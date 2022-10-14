package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type UpdateFindingsRequestBodyFilters struct {
	AwsAccountID                                   []shared.StringFilter  `json:"AwsAccountId,omitempty"`
	CompanyName                                    []shared.StringFilter  `json:"CompanyName,omitempty"`
	ComplianceStatus                               []shared.StringFilter  `json:"ComplianceStatus,omitempty"`
	Confidence                                     []shared.NumberFilter  `json:"Confidence,omitempty"`
	CreatedAt                                      []shared.DateFilter    `json:"CreatedAt,omitempty"`
	Criticality                                    []shared.NumberFilter  `json:"Criticality,omitempty"`
	Description                                    []shared.StringFilter  `json:"Description,omitempty"`
	FindingProviderFieldsConfidence                []shared.NumberFilter  `json:"FindingProviderFieldsConfidence,omitempty"`
	FindingProviderFieldsCriticality               []shared.NumberFilter  `json:"FindingProviderFieldsCriticality,omitempty"`
	FindingProviderFieldsRelatedFindingsID         []shared.StringFilter  `json:"FindingProviderFieldsRelatedFindingsId,omitempty"`
	FindingProviderFieldsRelatedFindingsProductArn []shared.StringFilter  `json:"FindingProviderFieldsRelatedFindingsProductArn,omitempty"`
	FindingProviderFieldsSeverityLabel             []shared.StringFilter  `json:"FindingProviderFieldsSeverityLabel,omitempty"`
	FindingProviderFieldsSeverityOriginal          []shared.StringFilter  `json:"FindingProviderFieldsSeverityOriginal,omitempty"`
	FindingProviderFieldsTypes                     []shared.StringFilter  `json:"FindingProviderFieldsTypes,omitempty"`
	FirstObservedAt                                []shared.DateFilter    `json:"FirstObservedAt,omitempty"`
	GeneratorID                                    []shared.StringFilter  `json:"GeneratorId,omitempty"`
	ID                                             []shared.StringFilter  `json:"Id,omitempty"`
	Keyword                                        []shared.KeywordFilter `json:"Keyword,omitempty"`
	LastObservedAt                                 []shared.DateFilter    `json:"LastObservedAt,omitempty"`
	MalwareName                                    []shared.StringFilter  `json:"MalwareName,omitempty"`
	MalwarePath                                    []shared.StringFilter  `json:"MalwarePath,omitempty"`
	MalwareState                                   []shared.StringFilter  `json:"MalwareState,omitempty"`
	MalwareType                                    []shared.StringFilter  `json:"MalwareType,omitempty"`
	NetworkDestinationDomain                       []shared.StringFilter  `json:"NetworkDestinationDomain,omitempty"`
	NetworkDestinationIPV4                         []shared.IPFilter      `json:"NetworkDestinationIpV4,omitempty"`
	NetworkDestinationIPV6                         []shared.IPFilter      `json:"NetworkDestinationIpV6,omitempty"`
	NetworkDestinationPort                         []shared.NumberFilter  `json:"NetworkDestinationPort,omitempty"`
	NetworkDirection                               []shared.StringFilter  `json:"NetworkDirection,omitempty"`
	NetworkProtocol                                []shared.StringFilter  `json:"NetworkProtocol,omitempty"`
	NetworkSourceDomain                            []shared.StringFilter  `json:"NetworkSourceDomain,omitempty"`
	NetworkSourceIPV4                              []shared.IPFilter      `json:"NetworkSourceIpV4,omitempty"`
	NetworkSourceIPV6                              []shared.IPFilter      `json:"NetworkSourceIpV6,omitempty"`
	NetworkSourceMac                               []shared.StringFilter  `json:"NetworkSourceMac,omitempty"`
	NetworkSourcePort                              []shared.NumberFilter  `json:"NetworkSourcePort,omitempty"`
	NoteText                                       []shared.StringFilter  `json:"NoteText,omitempty"`
	NoteUpdatedAt                                  []shared.DateFilter    `json:"NoteUpdatedAt,omitempty"`
	NoteUpdatedBy                                  []shared.StringFilter  `json:"NoteUpdatedBy,omitempty"`
	ProcessLaunchedAt                              []shared.DateFilter    `json:"ProcessLaunchedAt,omitempty"`
	ProcessName                                    []shared.StringFilter  `json:"ProcessName,omitempty"`
	ProcessParentPid                               []shared.NumberFilter  `json:"ProcessParentPid,omitempty"`
	ProcessPath                                    []shared.StringFilter  `json:"ProcessPath,omitempty"`
	ProcessPid                                     []shared.NumberFilter  `json:"ProcessPid,omitempty"`
	ProcessTerminatedAt                            []shared.DateFilter    `json:"ProcessTerminatedAt,omitempty"`
	ProductArn                                     []shared.StringFilter  `json:"ProductArn,omitempty"`
	ProductFields                                  []shared.MapFilter     `json:"ProductFields,omitempty"`
	ProductName                                    []shared.StringFilter  `json:"ProductName,omitempty"`
	RecommendationText                             []shared.StringFilter  `json:"RecommendationText,omitempty"`
	RecordState                                    []shared.StringFilter  `json:"RecordState,omitempty"`
	Region                                         []shared.StringFilter  `json:"Region,omitempty"`
	RelatedFindingsID                              []shared.StringFilter  `json:"RelatedFindingsId,omitempty"`
	RelatedFindingsProductArn                      []shared.StringFilter  `json:"RelatedFindingsProductArn,omitempty"`
	ResourceAwsEc2InstanceIamInstanceProfileArn    []shared.StringFilter  `json:"ResourceAwsEc2InstanceIamInstanceProfileArn,omitempty"`
	ResourceAwsEc2InstanceImageID                  []shared.StringFilter  `json:"ResourceAwsEc2InstanceImageId,omitempty"`
	ResourceAwsEc2InstanceIPV4Addresses            []shared.IPFilter      `json:"ResourceAwsEc2InstanceIpV4Addresses,omitempty"`
	ResourceAwsEc2InstanceIPV6Addresses            []shared.IPFilter      `json:"ResourceAwsEc2InstanceIpV6Addresses,omitempty"`
	ResourceAwsEc2InstanceKeyName                  []shared.StringFilter  `json:"ResourceAwsEc2InstanceKeyName,omitempty"`
	ResourceAwsEc2InstanceLaunchedAt               []shared.DateFilter    `json:"ResourceAwsEc2InstanceLaunchedAt,omitempty"`
	ResourceAwsEc2InstanceSubnetID                 []shared.StringFilter  `json:"ResourceAwsEc2InstanceSubnetId,omitempty"`
	ResourceAwsEc2InstanceType                     []shared.StringFilter  `json:"ResourceAwsEc2InstanceType,omitempty"`
	ResourceAwsEc2InstanceVpcID                    []shared.StringFilter  `json:"ResourceAwsEc2InstanceVpcId,omitempty"`
	ResourceAwsIamAccessKeyCreatedAt               []shared.DateFilter    `json:"ResourceAwsIamAccessKeyCreatedAt,omitempty"`
	ResourceAwsIamAccessKeyPrincipalName           []shared.StringFilter  `json:"ResourceAwsIamAccessKeyPrincipalName,omitempty"`
	ResourceAwsIamAccessKeyStatus                  []shared.StringFilter  `json:"ResourceAwsIamAccessKeyStatus,omitempty"`
	ResourceAwsIamAccessKeyUserName                []shared.StringFilter  `json:"ResourceAwsIamAccessKeyUserName,omitempty"`
	ResourceAwsIamUserUserName                     []shared.StringFilter  `json:"ResourceAwsIamUserUserName,omitempty"`
	ResourceAwsS3BucketOwnerID                     []shared.StringFilter  `json:"ResourceAwsS3BucketOwnerId,omitempty"`
	ResourceAwsS3BucketOwnerName                   []shared.StringFilter  `json:"ResourceAwsS3BucketOwnerName,omitempty"`
	ResourceContainerImageID                       []shared.StringFilter  `json:"ResourceContainerImageId,omitempty"`
	ResourceContainerImageName                     []shared.StringFilter  `json:"ResourceContainerImageName,omitempty"`
	ResourceContainerLaunchedAt                    []shared.DateFilter    `json:"ResourceContainerLaunchedAt,omitempty"`
	ResourceContainerName                          []shared.StringFilter  `json:"ResourceContainerName,omitempty"`
	ResourceDetailsOther                           []shared.MapFilter     `json:"ResourceDetailsOther,omitempty"`
	ResourceID                                     []shared.StringFilter  `json:"ResourceId,omitempty"`
	ResourcePartition                              []shared.StringFilter  `json:"ResourcePartition,omitempty"`
	ResourceRegion                                 []shared.StringFilter  `json:"ResourceRegion,omitempty"`
	ResourceTags                                   []shared.MapFilter     `json:"ResourceTags,omitempty"`
	ResourceType                                   []shared.StringFilter  `json:"ResourceType,omitempty"`
	SeverityLabel                                  []shared.StringFilter  `json:"SeverityLabel,omitempty"`
	SeverityNormalized                             []shared.NumberFilter  `json:"SeverityNormalized,omitempty"`
	SeverityProduct                                []shared.NumberFilter  `json:"SeverityProduct,omitempty"`
	SourceURL                                      []shared.StringFilter  `json:"SourceUrl,omitempty"`
	ThreatIntelIndicatorCategory                   []shared.StringFilter  `json:"ThreatIntelIndicatorCategory,omitempty"`
	ThreatIntelIndicatorLastObservedAt             []shared.DateFilter    `json:"ThreatIntelIndicatorLastObservedAt,omitempty"`
	ThreatIntelIndicatorSource                     []shared.StringFilter  `json:"ThreatIntelIndicatorSource,omitempty"`
	ThreatIntelIndicatorSourceURL                  []shared.StringFilter  `json:"ThreatIntelIndicatorSourceUrl,omitempty"`
	ThreatIntelIndicatorType                       []shared.StringFilter  `json:"ThreatIntelIndicatorType,omitempty"`
	ThreatIntelIndicatorValue                      []shared.StringFilter  `json:"ThreatIntelIndicatorValue,omitempty"`
	Title                                          []shared.StringFilter  `json:"Title,omitempty"`
	Type                                           []shared.StringFilter  `json:"Type,omitempty"`
	UpdatedAt                                      []shared.DateFilter    `json:"UpdatedAt,omitempty"`
	UserDefinedFields                              []shared.MapFilter     `json:"UserDefinedFields,omitempty"`
	VerificationState                              []shared.StringFilter  `json:"VerificationState,omitempty"`
	WorkflowState                                  []shared.StringFilter  `json:"WorkflowState,omitempty"`
	WorkflowStatus                                 []shared.StringFilter  `json:"WorkflowStatus,omitempty"`
}

type UpdateFindingsRequestBodyNote struct {
	Text      *string `json:"Text,omitempty"`
	UpdatedBy *string `json:"UpdatedBy,omitempty"`
}

type UpdateFindingsRequestBodyRecordStateEnum string

const (
	UpdateFindingsRequestBodyRecordStateEnumActive   UpdateFindingsRequestBodyRecordStateEnum = "ACTIVE"
	UpdateFindingsRequestBodyRecordStateEnumArchived UpdateFindingsRequestBodyRecordStateEnum = "ARCHIVED"
)

type UpdateFindingsRequestBody struct {
	Filters     UpdateFindingsRequestBodyFilters          `json:"Filters"`
	Note        *UpdateFindingsRequestBodyNote            `json:"Note,omitempty"`
	RecordState *UpdateFindingsRequestBodyRecordStateEnum `json:"RecordState,omitempty"`
}

type UpdateFindingsRequest struct {
	Headers UpdateFindingsHeaders
	Request UpdateFindingsRequestBody `request:"mediaType=application/json"`
}

type UpdateFindingsResponse struct {
	ContentType               string
	InternalException         *interface{}
	InvalidAccessException    *interface{}
	InvalidInputException     *interface{}
	LimitExceededException    *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	UpdateFindingsResponse    map[string]interface{}
}
