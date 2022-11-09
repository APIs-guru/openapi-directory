import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateInsightHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateInsightRequestBodyFilters
/** 
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
export class CreateInsightRequestBodyFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsAccountId", elemType: shared.StringFilter })
  awsAccountId?: shared.StringFilter[];

  @Metadata({ data: "json, name=CompanyName", elemType: shared.StringFilter })
  companyName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ComplianceStatus", elemType: shared.StringFilter })
  complianceStatus?: shared.StringFilter[];

  @Metadata({ data: "json, name=Confidence", elemType: shared.NumberFilter })
  confidence?: shared.NumberFilter[];

  @Metadata({ data: "json, name=CreatedAt", elemType: shared.DateFilter })
  createdAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=Criticality", elemType: shared.NumberFilter })
  criticality?: shared.NumberFilter[];

  @Metadata({ data: "json, name=Description", elemType: shared.StringFilter })
  description?: shared.StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: shared.NumberFilter })
  findingProviderFieldsConfidence?: shared.NumberFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: shared.NumberFilter })
  findingProviderFieldsCriticality?: shared.NumberFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: shared.StringFilter })
  findingProviderFieldsRelatedFindingsId?: shared.StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: shared.StringFilter })
  findingProviderFieldsRelatedFindingsProductArn?: shared.StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: shared.StringFilter })
  findingProviderFieldsSeverityLabel?: shared.StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: shared.StringFilter })
  findingProviderFieldsSeverityOriginal?: shared.StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsTypes", elemType: shared.StringFilter })
  findingProviderFieldsTypes?: shared.StringFilter[];

  @Metadata({ data: "json, name=FirstObservedAt", elemType: shared.DateFilter })
  firstObservedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=GeneratorId", elemType: shared.StringFilter })
  generatorId?: shared.StringFilter[];

  @Metadata({ data: "json, name=Id", elemType: shared.StringFilter })
  id?: shared.StringFilter[];

  @Metadata({ data: "json, name=Keyword", elemType: shared.KeywordFilter })
  keyword?: shared.KeywordFilter[];

  @Metadata({ data: "json, name=LastObservedAt", elemType: shared.DateFilter })
  lastObservedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=MalwareName", elemType: shared.StringFilter })
  malwareName?: shared.StringFilter[];

  @Metadata({ data: "json, name=MalwarePath", elemType: shared.StringFilter })
  malwarePath?: shared.StringFilter[];

  @Metadata({ data: "json, name=MalwareState", elemType: shared.StringFilter })
  malwareState?: shared.StringFilter[];

  @Metadata({ data: "json, name=MalwareType", elemType: shared.StringFilter })
  malwareType?: shared.StringFilter[];

  @Metadata({ data: "json, name=NetworkDestinationDomain", elemType: shared.StringFilter })
  networkDestinationDomain?: shared.StringFilter[];

  @Metadata({ data: "json, name=NetworkDestinationIpV4", elemType: shared.IpFilter })
  networkDestinationIpV4?: shared.IpFilter[];

  @Metadata({ data: "json, name=NetworkDestinationIpV6", elemType: shared.IpFilter })
  networkDestinationIpV6?: shared.IpFilter[];

  @Metadata({ data: "json, name=NetworkDestinationPort", elemType: shared.NumberFilter })
  networkDestinationPort?: shared.NumberFilter[];

  @Metadata({ data: "json, name=NetworkDirection", elemType: shared.StringFilter })
  networkDirection?: shared.StringFilter[];

  @Metadata({ data: "json, name=NetworkProtocol", elemType: shared.StringFilter })
  networkProtocol?: shared.StringFilter[];

  @Metadata({ data: "json, name=NetworkSourceDomain", elemType: shared.StringFilter })
  networkSourceDomain?: shared.StringFilter[];

  @Metadata({ data: "json, name=NetworkSourceIpV4", elemType: shared.IpFilter })
  networkSourceIpV4?: shared.IpFilter[];

  @Metadata({ data: "json, name=NetworkSourceIpV6", elemType: shared.IpFilter })
  networkSourceIpV6?: shared.IpFilter[];

  @Metadata({ data: "json, name=NetworkSourceMac", elemType: shared.StringFilter })
  networkSourceMac?: shared.StringFilter[];

  @Metadata({ data: "json, name=NetworkSourcePort", elemType: shared.NumberFilter })
  networkSourcePort?: shared.NumberFilter[];

  @Metadata({ data: "json, name=NoteText", elemType: shared.StringFilter })
  noteText?: shared.StringFilter[];

  @Metadata({ data: "json, name=NoteUpdatedAt", elemType: shared.DateFilter })
  noteUpdatedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=NoteUpdatedBy", elemType: shared.StringFilter })
  noteUpdatedBy?: shared.StringFilter[];

  @Metadata({ data: "json, name=ProcessLaunchedAt", elemType: shared.DateFilter })
  processLaunchedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=ProcessName", elemType: shared.StringFilter })
  processName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ProcessParentPid", elemType: shared.NumberFilter })
  processParentPid?: shared.NumberFilter[];

  @Metadata({ data: "json, name=ProcessPath", elemType: shared.StringFilter })
  processPath?: shared.StringFilter[];

  @Metadata({ data: "json, name=ProcessPid", elemType: shared.NumberFilter })
  processPid?: shared.NumberFilter[];

  @Metadata({ data: "json, name=ProcessTerminatedAt", elemType: shared.DateFilter })
  processTerminatedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=ProductArn", elemType: shared.StringFilter })
  productArn?: shared.StringFilter[];

  @Metadata({ data: "json, name=ProductFields", elemType: shared.MapFilter })
  productFields?: shared.MapFilter[];

  @Metadata({ data: "json, name=ProductName", elemType: shared.StringFilter })
  productName?: shared.StringFilter[];

  @Metadata({ data: "json, name=RecommendationText", elemType: shared.StringFilter })
  recommendationText?: shared.StringFilter[];

  @Metadata({ data: "json, name=RecordState", elemType: shared.StringFilter })
  recordState?: shared.StringFilter[];

  @Metadata({ data: "json, name=Region", elemType: shared.StringFilter })
  region?: shared.StringFilter[];

  @Metadata({ data: "json, name=RelatedFindingsId", elemType: shared.StringFilter })
  relatedFindingsId?: shared.StringFilter[];

  @Metadata({ data: "json, name=RelatedFindingsProductArn", elemType: shared.StringFilter })
  relatedFindingsProductArn?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: shared.StringFilter })
  resourceAwsEc2InstanceIamInstanceProfileArn?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceImageId?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: shared.IpFilter })
  resourceAwsEc2InstanceIpV4Addresses?: shared.IpFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: shared.IpFilter })
  resourceAwsEc2InstanceIpV6Addresses?: shared.IpFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: shared.StringFilter })
  resourceAwsEc2InstanceKeyName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: shared.DateFilter })
  resourceAwsEc2InstanceLaunchedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceSubnetId?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: shared.StringFilter })
  resourceAwsEc2InstanceType?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceVpcId?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: shared.DateFilter })
  resourceAwsIamAccessKeyCreatedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyPrincipalName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyStatus?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyUserName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: shared.StringFilter })
  resourceAwsIamUserUserName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: shared.StringFilter })
  resourceAwsS3BucketOwnerId?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: shared.StringFilter })
  resourceAwsS3BucketOwnerName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceContainerImageId", elemType: shared.StringFilter })
  resourceContainerImageId?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceContainerImageName", elemType: shared.StringFilter })
  resourceContainerImageName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: shared.DateFilter })
  resourceContainerLaunchedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=ResourceContainerName", elemType: shared.StringFilter })
  resourceContainerName?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceDetailsOther", elemType: shared.MapFilter })
  resourceDetailsOther?: shared.MapFilter[];

  @Metadata({ data: "json, name=ResourceId", elemType: shared.StringFilter })
  resourceId?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourcePartition", elemType: shared.StringFilter })
  resourcePartition?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceRegion", elemType: shared.StringFilter })
  resourceRegion?: shared.StringFilter[];

  @Metadata({ data: "json, name=ResourceTags", elemType: shared.MapFilter })
  resourceTags?: shared.MapFilter[];

  @Metadata({ data: "json, name=ResourceType", elemType: shared.StringFilter })
  resourceType?: shared.StringFilter[];

  @Metadata({ data: "json, name=SeverityLabel", elemType: shared.StringFilter })
  severityLabel?: shared.StringFilter[];

  @Metadata({ data: "json, name=SeverityNormalized", elemType: shared.NumberFilter })
  severityNormalized?: shared.NumberFilter[];

  @Metadata({ data: "json, name=SeverityProduct", elemType: shared.NumberFilter })
  severityProduct?: shared.NumberFilter[];

  @Metadata({ data: "json, name=SourceUrl", elemType: shared.StringFilter })
  sourceUrl?: shared.StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: shared.StringFilter })
  threatIntelIndicatorCategory?: shared.StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: shared.DateFilter })
  threatIntelIndicatorLastObservedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: shared.StringFilter })
  threatIntelIndicatorSource?: shared.StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: shared.StringFilter })
  threatIntelIndicatorSourceUrl?: shared.StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorType", elemType: shared.StringFilter })
  threatIntelIndicatorType?: shared.StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: shared.StringFilter })
  threatIntelIndicatorValue?: shared.StringFilter[];

  @Metadata({ data: "json, name=Title", elemType: shared.StringFilter })
  title?: shared.StringFilter[];

  @Metadata({ data: "json, name=Type", elemType: shared.StringFilter })
  type?: shared.StringFilter[];

  @Metadata({ data: "json, name=UpdatedAt", elemType: shared.DateFilter })
  updatedAt?: shared.DateFilter[];

  @Metadata({ data: "json, name=UserDefinedFields", elemType: shared.MapFilter })
  userDefinedFields?: shared.MapFilter[];

  @Metadata({ data: "json, name=VerificationState", elemType: shared.StringFilter })
  verificationState?: shared.StringFilter[];

  @Metadata({ data: "json, name=WorkflowState", elemType: shared.StringFilter })
  workflowState?: shared.StringFilter[];

  @Metadata({ data: "json, name=WorkflowStatus", elemType: shared.StringFilter })
  workflowStatus?: shared.StringFilter[];
}


export class CreateInsightRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filters" })
  filters: CreateInsightRequestBodyFilters;

  @Metadata({ data: "json, name=GroupByAttribute" })
  groupByAttribute: string;

  @Metadata({ data: "json, name=Name" })
  name: string;
}


export class CreateInsightRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateInsightHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateInsightRequestBody;
}


export class CreateInsightResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createInsightResponse?: shared.CreateInsightResponse;

  @Metadata()
  internalException?: any;

  @Metadata()
  invalidAccessException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  resourceConflictException?: any;

  @Metadata()
  statusCode: number;
}
