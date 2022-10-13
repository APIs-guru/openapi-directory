package operations

import (
	"openapi/pkg/models/shared"
)

type GetFindingsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type GetFindingsHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetFindingsRequestBodyFilters struct {
	AwsAccountID                                   []shared.StringFilter  `json:"AwsAccountId"`
	CompanyName                                    []shared.StringFilter  `json:"CompanyName"`
	ComplianceStatus                               []shared.StringFilter  `json:"ComplianceStatus"`
	Confidence                                     []shared.NumberFilter  `json:"Confidence"`
	CreatedAt                                      []shared.DateFilter    `json:"CreatedAt"`
	Criticality                                    []shared.NumberFilter  `json:"Criticality"`
	Description                                    []shared.StringFilter  `json:"Description"`
	FindingProviderFieldsConfidence                []shared.NumberFilter  `json:"FindingProviderFieldsConfidence"`
	FindingProviderFieldsCriticality               []shared.NumberFilter  `json:"FindingProviderFieldsCriticality"`
	FindingProviderFieldsRelatedFindingsID         []shared.StringFilter  `json:"FindingProviderFieldsRelatedFindingsId"`
	FindingProviderFieldsRelatedFindingsProductArn []shared.StringFilter  `json:"FindingProviderFieldsRelatedFindingsProductArn"`
	FindingProviderFieldsSeverityLabel             []shared.StringFilter  `json:"FindingProviderFieldsSeverityLabel"`
	FindingProviderFieldsSeverityOriginal          []shared.StringFilter  `json:"FindingProviderFieldsSeverityOriginal"`
	FindingProviderFieldsTypes                     []shared.StringFilter  `json:"FindingProviderFieldsTypes"`
	FirstObservedAt                                []shared.DateFilter    `json:"FirstObservedAt"`
	GeneratorID                                    []shared.StringFilter  `json:"GeneratorId"`
	ID                                             []shared.StringFilter  `json:"Id"`
	Keyword                                        []shared.KeywordFilter `json:"Keyword"`
	LastObservedAt                                 []shared.DateFilter    `json:"LastObservedAt"`
	MalwareName                                    []shared.StringFilter  `json:"MalwareName"`
	MalwarePath                                    []shared.StringFilter  `json:"MalwarePath"`
	MalwareState                                   []shared.StringFilter  `json:"MalwareState"`
	MalwareType                                    []shared.StringFilter  `json:"MalwareType"`
	NetworkDestinationDomain                       []shared.StringFilter  `json:"NetworkDestinationDomain"`
	NetworkDestinationIPV4                         []shared.IPFilter      `json:"NetworkDestinationIpV4"`
	NetworkDestinationIPV6                         []shared.IPFilter      `json:"NetworkDestinationIpV6"`
	NetworkDestinationPort                         []shared.NumberFilter  `json:"NetworkDestinationPort"`
	NetworkDirection                               []shared.StringFilter  `json:"NetworkDirection"`
	NetworkProtocol                                []shared.StringFilter  `json:"NetworkProtocol"`
	NetworkSourceDomain                            []shared.StringFilter  `json:"NetworkSourceDomain"`
	NetworkSourceIPV4                              []shared.IPFilter      `json:"NetworkSourceIpV4"`
	NetworkSourceIPV6                              []shared.IPFilter      `json:"NetworkSourceIpV6"`
	NetworkSourceMac                               []shared.StringFilter  `json:"NetworkSourceMac"`
	NetworkSourcePort                              []shared.NumberFilter  `json:"NetworkSourcePort"`
	NoteText                                       []shared.StringFilter  `json:"NoteText"`
	NoteUpdatedAt                                  []shared.DateFilter    `json:"NoteUpdatedAt"`
	NoteUpdatedBy                                  []shared.StringFilter  `json:"NoteUpdatedBy"`
	ProcessLaunchedAt                              []shared.DateFilter    `json:"ProcessLaunchedAt"`
	ProcessName                                    []shared.StringFilter  `json:"ProcessName"`
	ProcessParentPid                               []shared.NumberFilter  `json:"ProcessParentPid"`
	ProcessPath                                    []shared.StringFilter  `json:"ProcessPath"`
	ProcessPid                                     []shared.NumberFilter  `json:"ProcessPid"`
	ProcessTerminatedAt                            []shared.DateFilter    `json:"ProcessTerminatedAt"`
	ProductArn                                     []shared.StringFilter  `json:"ProductArn"`
	ProductFields                                  []shared.MapFilter     `json:"ProductFields"`
	ProductName                                    []shared.StringFilter  `json:"ProductName"`
	RecommendationText                             []shared.StringFilter  `json:"RecommendationText"`
	RecordState                                    []shared.StringFilter  `json:"RecordState"`
	Region                                         []shared.StringFilter  `json:"Region"`
	RelatedFindingsID                              []shared.StringFilter  `json:"RelatedFindingsId"`
	RelatedFindingsProductArn                      []shared.StringFilter  `json:"RelatedFindingsProductArn"`
	ResourceAwsEc2InstanceIamInstanceProfileArn    []shared.StringFilter  `json:"ResourceAwsEc2InstanceIamInstanceProfileArn"`
	ResourceAwsEc2InstanceImageID                  []shared.StringFilter  `json:"ResourceAwsEc2InstanceImageId"`
	ResourceAwsEc2InstanceIPV4Addresses            []shared.IPFilter      `json:"ResourceAwsEc2InstanceIpV4Addresses"`
	ResourceAwsEc2InstanceIPV6Addresses            []shared.IPFilter      `json:"ResourceAwsEc2InstanceIpV6Addresses"`
	ResourceAwsEc2InstanceKeyName                  []shared.StringFilter  `json:"ResourceAwsEc2InstanceKeyName"`
	ResourceAwsEc2InstanceLaunchedAt               []shared.DateFilter    `json:"ResourceAwsEc2InstanceLaunchedAt"`
	ResourceAwsEc2InstanceSubnetID                 []shared.StringFilter  `json:"ResourceAwsEc2InstanceSubnetId"`
	ResourceAwsEc2InstanceType                     []shared.StringFilter  `json:"ResourceAwsEc2InstanceType"`
	ResourceAwsEc2InstanceVpcID                    []shared.StringFilter  `json:"ResourceAwsEc2InstanceVpcId"`
	ResourceAwsIamAccessKeyCreatedAt               []shared.DateFilter    `json:"ResourceAwsIamAccessKeyCreatedAt"`
	ResourceAwsIamAccessKeyPrincipalName           []shared.StringFilter  `json:"ResourceAwsIamAccessKeyPrincipalName"`
	ResourceAwsIamAccessKeyStatus                  []shared.StringFilter  `json:"ResourceAwsIamAccessKeyStatus"`
	ResourceAwsIamAccessKeyUserName                []shared.StringFilter  `json:"ResourceAwsIamAccessKeyUserName"`
	ResourceAwsIamUserUserName                     []shared.StringFilter  `json:"ResourceAwsIamUserUserName"`
	ResourceAwsS3BucketOwnerID                     []shared.StringFilter  `json:"ResourceAwsS3BucketOwnerId"`
	ResourceAwsS3BucketOwnerName                   []shared.StringFilter  `json:"ResourceAwsS3BucketOwnerName"`
	ResourceContainerImageID                       []shared.StringFilter  `json:"ResourceContainerImageId"`
	ResourceContainerImageName                     []shared.StringFilter  `json:"ResourceContainerImageName"`
	ResourceContainerLaunchedAt                    []shared.DateFilter    `json:"ResourceContainerLaunchedAt"`
	ResourceContainerName                          []shared.StringFilter  `json:"ResourceContainerName"`
	ResourceDetailsOther                           []shared.MapFilter     `json:"ResourceDetailsOther"`
	ResourceID                                     []shared.StringFilter  `json:"ResourceId"`
	ResourcePartition                              []shared.StringFilter  `json:"ResourcePartition"`
	ResourceRegion                                 []shared.StringFilter  `json:"ResourceRegion"`
	ResourceTags                                   []shared.MapFilter     `json:"ResourceTags"`
	ResourceType                                   []shared.StringFilter  `json:"ResourceType"`
	SeverityLabel                                  []shared.StringFilter  `json:"SeverityLabel"`
	SeverityNormalized                             []shared.NumberFilter  `json:"SeverityNormalized"`
	SeverityProduct                                []shared.NumberFilter  `json:"SeverityProduct"`
	SourceURL                                      []shared.StringFilter  `json:"SourceUrl"`
	ThreatIntelIndicatorCategory                   []shared.StringFilter  `json:"ThreatIntelIndicatorCategory"`
	ThreatIntelIndicatorLastObservedAt             []shared.DateFilter    `json:"ThreatIntelIndicatorLastObservedAt"`
	ThreatIntelIndicatorSource                     []shared.StringFilter  `json:"ThreatIntelIndicatorSource"`
	ThreatIntelIndicatorSourceURL                  []shared.StringFilter  `json:"ThreatIntelIndicatorSourceUrl"`
	ThreatIntelIndicatorType                       []shared.StringFilter  `json:"ThreatIntelIndicatorType"`
	ThreatIntelIndicatorValue                      []shared.StringFilter  `json:"ThreatIntelIndicatorValue"`
	Title                                          []shared.StringFilter  `json:"Title"`
	Type                                           []shared.StringFilter  `json:"Type"`
	UpdatedAt                                      []shared.DateFilter    `json:"UpdatedAt"`
	UserDefinedFields                              []shared.MapFilter     `json:"UserDefinedFields"`
	VerificationState                              []shared.StringFilter  `json:"VerificationState"`
	WorkflowState                                  []shared.StringFilter  `json:"WorkflowState"`
	WorkflowStatus                                 []shared.StringFilter  `json:"WorkflowStatus"`
}

type GetFindingsRequestBody struct {
	Filters      *GetFindingsRequestBodyFilters `json:"Filters"`
	MaxResults   *int64                         `json:"MaxResults"`
	NextToken    *string                        `json:"NextToken"`
	SortCriteria []shared.SortCriterion         `json:"SortCriteria"`
}

type GetFindingsRequest struct {
	QueryParams GetFindingsQueryParams
	Headers     GetFindingsHeaders
	Request     GetFindingsRequestBody `request:"mediaType=application/json"`
}

type GetFindingsResponse struct {
	ContentType            string
	GetFindingsResponse    *shared.GetFindingsResponse
	InternalException      *interface{}
	InvalidAccessException *interface{}
	InvalidInputException  *interface{}
	LimitExceededException *interface{}
	StatusCode             int64
}
