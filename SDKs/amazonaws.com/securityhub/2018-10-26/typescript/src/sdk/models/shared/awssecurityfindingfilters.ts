import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { DateFilter } from "./datefilter";
import { KeywordFilter } from "./keywordfilter";
import { IpFilter } from "./ipfilter";
import { MapFilter } from "./mapfilter";



// AwsSecurityFindingFilters
/** 
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
export class AwsSecurityFindingFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AwsAccountId", elemType: StringFilter })
  awsAccountId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=CompanyName", elemType: StringFilter })
  companyName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ComplianceStatus", elemType: StringFilter })
  complianceStatus?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Confidence", elemType: NumberFilter })
  confidence?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=CreatedAt", elemType: DateFilter })
  createdAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=Criticality", elemType: NumberFilter })
  criticality?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=Description", elemType: StringFilter })
  description?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: NumberFilter })
  findingProviderFieldsConfidence?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: NumberFilter })
  findingProviderFieldsCriticality?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: StringFilter })
  findingProviderFieldsRelatedFindingsId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: StringFilter })
  findingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: StringFilter })
  findingProviderFieldsSeverityLabel?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: StringFilter })
  findingProviderFieldsSeverityOriginal?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsTypes", elemType: StringFilter })
  findingProviderFieldsTypes?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=FirstObservedAt", elemType: DateFilter })
  firstObservedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=GeneratorId", elemType: StringFilter })
  generatorId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Id", elemType: StringFilter })
  id?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Keyword", elemType: KeywordFilter })
  keyword?: KeywordFilter[];

  @SpeakeasyMetadata({ data: "json, name=LastObservedAt", elemType: DateFilter })
  lastObservedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwareName", elemType: StringFilter })
  malwareName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwarePath", elemType: StringFilter })
  malwarePath?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwareState", elemType: StringFilter })
  malwareState?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=MalwareType", elemType: StringFilter })
  malwareType?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationDomain", elemType: StringFilter })
  networkDestinationDomain?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV4", elemType: IpFilter })
  networkDestinationIpV4?: IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV6", elemType: IpFilter })
  networkDestinationIpV6?: IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDestinationPort", elemType: NumberFilter })
  networkDestinationPort?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkDirection", elemType: StringFilter })
  networkDirection?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkProtocol", elemType: StringFilter })
  networkProtocol?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceDomain", elemType: StringFilter })
  networkSourceDomain?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV4", elemType: IpFilter })
  networkSourceIpV4?: IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV6", elemType: IpFilter })
  networkSourceIpV6?: IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourceMac", elemType: StringFilter })
  networkSourceMac?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NetworkSourcePort", elemType: NumberFilter })
  networkSourcePort?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=NoteText", elemType: StringFilter })
  noteText?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=NoteUpdatedAt", elemType: DateFilter })
  noteUpdatedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=NoteUpdatedBy", elemType: StringFilter })
  noteUpdatedBy?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessLaunchedAt", elemType: DateFilter })
  processLaunchedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessName", elemType: StringFilter })
  processName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessParentPid", elemType: NumberFilter })
  processParentPid?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessPath", elemType: StringFilter })
  processPath?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessPid", elemType: NumberFilter })
  processPid?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProcessTerminatedAt", elemType: DateFilter })
  processTerminatedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProductArn", elemType: StringFilter })
  productArn?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProductFields", elemType: MapFilter })
  productFields?: MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=ProductName", elemType: StringFilter })
  productName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RecommendationText", elemType: StringFilter })
  recommendationText?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RecordState", elemType: StringFilter })
  recordState?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Region", elemType: StringFilter })
  region?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RelatedFindingsId", elemType: StringFilter })
  relatedFindingsId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=RelatedFindingsProductArn", elemType: StringFilter })
  relatedFindingsProductArn?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: StringFilter })
  resourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: StringFilter })
  resourceAwsEc2InstanceImageId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: IpFilter })
  resourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: IpFilter })
  resourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: StringFilter })
  resourceAwsEc2InstanceKeyName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: DateFilter })
  resourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: StringFilter })
  resourceAwsEc2InstanceSubnetId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: StringFilter })
  resourceAwsEc2InstanceType?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: StringFilter })
  resourceAwsEc2InstanceVpcId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: DateFilter })
  resourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: StringFilter })
  resourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: StringFilter })
  resourceAwsIamAccessKeyStatus?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: StringFilter })
  resourceAwsIamAccessKeyUserName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: StringFilter })
  resourceAwsIamUserUserName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: StringFilter })
  resourceAwsS3BucketOwnerId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: StringFilter })
  resourceAwsS3BucketOwnerName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerImageId", elemType: StringFilter })
  resourceContainerImageId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerImageName", elemType: StringFilter })
  resourceContainerImageName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: DateFilter })
  resourceContainerLaunchedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceContainerName", elemType: StringFilter })
  resourceContainerName?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceDetailsOther", elemType: MapFilter })
  resourceDetailsOther?: MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceId", elemType: StringFilter })
  resourceId?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourcePartition", elemType: StringFilter })
  resourcePartition?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceRegion", elemType: StringFilter })
  resourceRegion?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: MapFilter })
  resourceTags?: MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=ResourceType", elemType: StringFilter })
  resourceType?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=SeverityLabel", elemType: StringFilter })
  severityLabel?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=SeverityNormalized", elemType: NumberFilter })
  severityNormalized?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=SeverityProduct", elemType: NumberFilter })
  severityProduct?: NumberFilter[];

  @SpeakeasyMetadata({ data: "json, name=SourceUrl", elemType: StringFilter })
  sourceUrl?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: StringFilter })
  threatIntelIndicatorCategory?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: DateFilter })
  threatIntelIndicatorLastObservedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: StringFilter })
  threatIntelIndicatorSource?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: StringFilter })
  threatIntelIndicatorSourceUrl?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorType", elemType: StringFilter })
  threatIntelIndicatorType?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: StringFilter })
  threatIntelIndicatorValue?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Title", elemType: StringFilter })
  title?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=Type", elemType: StringFilter })
  type?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=UpdatedAt", elemType: DateFilter })
  updatedAt?: DateFilter[];

  @SpeakeasyMetadata({ data: "json, name=UserDefinedFields", elemType: MapFilter })
  userDefinedFields?: MapFilter[];

  @SpeakeasyMetadata({ data: "json, name=VerificationState", elemType: StringFilter })
  verificationState?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowState", elemType: StringFilter })
  workflowState?: StringFilter[];

  @SpeakeasyMetadata({ data: "json, name=WorkflowStatus", elemType: StringFilter })
  workflowStatus?: StringFilter[];
}
