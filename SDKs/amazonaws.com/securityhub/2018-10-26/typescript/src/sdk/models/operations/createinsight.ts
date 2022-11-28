import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateInsightHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


// CreateInsightRequestBodyFilters
/** 
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
export class CreateInsightRequestBodyFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsAccountId", elemType: shared.StringFilter })
  awsAccountId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=CompanyName", elemType: shared.StringFilter })
  companyName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ComplianceStatus", elemType: shared.StringFilter })
  complianceStatus?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Confidence", elemType: shared.NumberFilter })
  confidence?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=CreatedAt", elemType: shared.DateFilter })
  createdAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=Criticality", elemType: shared.NumberFilter })
  criticality?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=Description", elemType: shared.StringFilter })
  description?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: shared.NumberFilter })
  findingProviderFieldsConfidence?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: shared.NumberFilter })
  findingProviderFieldsCriticality?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: shared.StringFilter })
  findingProviderFieldsRelatedFindingsId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: shared.StringFilter })
  findingProviderFieldsRelatedFindingsProductArn?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: shared.StringFilter })
  findingProviderFieldsSeverityLabel?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: shared.StringFilter })
  findingProviderFieldsSeverityOriginal?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsTypes", elemType: shared.StringFilter })
  findingProviderFieldsTypes?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FirstObservedAt", elemType: shared.DateFilter })
  firstObservedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=GeneratorId", elemType: shared.StringFilter })
  generatorId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Id", elemType: shared.StringFilter })
  id?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Keyword", elemType: shared.KeywordFilter })
  keyword?: shared.KeywordFilter[];

  @SpeakeasyMetadata({ data: "json, name=LastObservedAt", elemType: shared.DateFilter })
  lastObservedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwareName", elemType: shared.StringFilter })
  malwareName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwarePath", elemType: shared.StringFilter })
  malwarePath?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwareState", elemType: shared.StringFilter })
  malwareState?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwareType", elemType: shared.StringFilter })
  malwareType?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationDomain", elemType: shared.StringFilter })
  networkDestinationDomain?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV4", elemType: shared.IpFilter })
  networkDestinationIpV4?: shared.IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV6", elemType: shared.IpFilter })
  networkDestinationIpV6?: shared.IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationPort", elemType: shared.NumberFilter })
  networkDestinationPort?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDirection", elemType: shared.StringFilter })
  networkDirection?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkProtocol", elemType: shared.StringFilter })
  networkProtocol?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceDomain", elemType: shared.StringFilter })
  networkSourceDomain?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV4", elemType: shared.IpFilter })
  networkSourceIpV4?: shared.IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV6", elemType: shared.IpFilter })
  networkSourceIpV6?: shared.IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceMac", elemType: shared.StringFilter })
  networkSourceMac?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourcePort", elemType: shared.NumberFilter })
  networkSourcePort?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=NoteText", elemType: shared.StringFilter })
  noteText?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NoteUpdatedAt", elemType: shared.DateFilter })
  noteUpdatedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=NoteUpdatedBy", elemType: shared.StringFilter })
  noteUpdatedBy?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessLaunchedAt", elemType: shared.DateFilter })
  processLaunchedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessName", elemType: shared.StringFilter })
  processName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessParentPid", elemType: shared.NumberFilter })
  processParentPid?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessPath", elemType: shared.StringFilter })
  processPath?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessPid", elemType: shared.NumberFilter })
  processPid?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessTerminatedAt", elemType: shared.DateFilter })
  processTerminatedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProductArn", elemType: shared.StringFilter })
  productArn?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProductFields", elemType: shared.MapFilter })
  productFields?: shared.MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProductName", elemType: shared.StringFilter })
  productName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RecommendationText", elemType: shared.StringFilter })
  recommendationText?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RecordState", elemType: shared.StringFilter })
  recordState?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Region", elemType: shared.StringFilter })
  region?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RelatedFindingsId", elemType: shared.StringFilter })
  relatedFindingsId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RelatedFindingsProductArn", elemType: shared.StringFilter })
  relatedFindingsProductArn?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: shared.StringFilter })
  resourceAwsEc2InstanceIamInstanceProfileArn?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceImageId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: shared.IpFilter })
  resourceAwsEc2InstanceIpV4Addresses?: shared.IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: shared.IpFilter })
  resourceAwsEc2InstanceIpV6Addresses?: shared.IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: shared.StringFilter })
  resourceAwsEc2InstanceKeyName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: shared.DateFilter })
  resourceAwsEc2InstanceLaunchedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceSubnetId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: shared.StringFilter })
  resourceAwsEc2InstanceType?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceVpcId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: shared.DateFilter })
  resourceAwsIamAccessKeyCreatedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyPrincipalName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyStatus?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyUserName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: shared.StringFilter })
  resourceAwsIamUserUserName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: shared.StringFilter })
  resourceAwsS3BucketOwnerId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: shared.StringFilter })
  resourceAwsS3BucketOwnerName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerImageId", elemType: shared.StringFilter })
  resourceContainerImageId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerImageName", elemType: shared.StringFilter })
  resourceContainerImageName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: shared.DateFilter })
  resourceContainerLaunchedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerName", elemType: shared.StringFilter })
  resourceContainerName?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceDetailsOther", elemType: shared.MapFilter })
  resourceDetailsOther?: shared.MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceId", elemType: shared.StringFilter })
  resourceId?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourcePartition", elemType: shared.StringFilter })
  resourcePartition?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceRegion", elemType: shared.StringFilter })
  resourceRegion?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: shared.MapFilter })
  resourceTags?: shared.MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType", elemType: shared.StringFilter })
  resourceType?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=SeverityLabel", elemType: shared.StringFilter })
  severityLabel?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=SeverityNormalized", elemType: shared.NumberFilter })
  severityNormalized?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=SeverityProduct", elemType: shared.NumberFilter })
  severityProduct?: shared.NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=SourceUrl", elemType: shared.StringFilter })
  sourceUrl?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: shared.StringFilter })
  threatIntelIndicatorCategory?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: shared.DateFilter })
  threatIntelIndicatorLastObservedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: shared.StringFilter })
  threatIntelIndicatorSource?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: shared.StringFilter })
  threatIntelIndicatorSourceUrl?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorType", elemType: shared.StringFilter })
  threatIntelIndicatorType?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: shared.StringFilter })
  threatIntelIndicatorValue?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Title", elemType: shared.StringFilter })
  title?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Type", elemType: shared.StringFilter })
  type?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt", elemType: shared.DateFilter })
  updatedAt?: shared.DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=UserDefinedFields", elemType: shared.MapFilter })
  userDefinedFields?: shared.MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=VerificationState", elemType: shared.StringFilter })
  verificationState?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowState", elemType: shared.StringFilter })
  workflowState?: shared.StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowStatus", elemType: shared.StringFilter })
  workflowStatus?: shared.StringFilter[];
}


export class CreateInsightRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filters" })
  filters: CreateInsightRequestBodyFilters;

  @SpeakeasyMetadata({ data: "json, name=GroupByAttribute" })
  groupByAttribute: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;
}


export class CreateInsightRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateInsightHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateInsightRequestBody;
}


export class CreateInsightResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createInsightResponse?: shared.CreateInsightResponse;

  @SpeakeasyMetadata()
  internalException?: any;

  @SpeakeasyMetadata()
  invalidAccessException?: any;

  @SpeakeasyMetadata()
  invalidInputException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  resourceConflictException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
