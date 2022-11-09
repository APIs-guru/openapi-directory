import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { DateFilter } from "./datefilter";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { KeywordFilter } from "./keywordfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { IpFilter } from "./ipfilter";
import { IpFilter } from "./ipfilter";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { IpFilter } from "./ipfilter";
import { IpFilter } from "./ipfilter";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { MapFilter } from "./mapfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { IpFilter } from "./ipfilter";
import { IpFilter } from "./ipfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { MapFilter } from "./mapfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { MapFilter } from "./mapfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { NumberFilter } from "./numberfilter";
import { NumberFilter } from "./numberfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { DateFilter } from "./datefilter";
import { MapFilter } from "./mapfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";
import { StringFilter } from "./stringfilter";


// AwsSecurityFindingFilters
/** 
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
export class AwsSecurityFindingFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=AwsAccountId", elemType: shared.StringFilter })
  awsAccountId?: StringFilter[];

  @Metadata({ data: "json, name=CompanyName", elemType: shared.StringFilter })
  companyName?: StringFilter[];

  @Metadata({ data: "json, name=ComplianceStatus", elemType: shared.StringFilter })
  complianceStatus?: StringFilter[];

  @Metadata({ data: "json, name=Confidence", elemType: shared.NumberFilter })
  confidence?: NumberFilter[];

  @Metadata({ data: "json, name=CreatedAt", elemType: shared.DateFilter })
  createdAt?: DateFilter[];

  @Metadata({ data: "json, name=Criticality", elemType: shared.NumberFilter })
  criticality?: NumberFilter[];

  @Metadata({ data: "json, name=Description", elemType: shared.StringFilter })
  description?: StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: shared.NumberFilter })
  findingProviderFieldsConfidence?: NumberFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: shared.NumberFilter })
  findingProviderFieldsCriticality?: NumberFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: shared.StringFilter })
  findingProviderFieldsRelatedFindingsId?: StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: shared.StringFilter })
  findingProviderFieldsRelatedFindingsProductArn?: StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: shared.StringFilter })
  findingProviderFieldsSeverityLabel?: StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: shared.StringFilter })
  findingProviderFieldsSeverityOriginal?: StringFilter[];

  @Metadata({ data: "json, name=FindingProviderFieldsTypes", elemType: shared.StringFilter })
  findingProviderFieldsTypes?: StringFilter[];

  @Metadata({ data: "json, name=FirstObservedAt", elemType: shared.DateFilter })
  firstObservedAt?: DateFilter[];

  @Metadata({ data: "json, name=GeneratorId", elemType: shared.StringFilter })
  generatorId?: StringFilter[];

  @Metadata({ data: "json, name=Id", elemType: shared.StringFilter })
  id?: StringFilter[];

  @Metadata({ data: "json, name=Keyword", elemType: shared.KeywordFilter })
  keyword?: KeywordFilter[];

  @Metadata({ data: "json, name=LastObservedAt", elemType: shared.DateFilter })
  lastObservedAt?: DateFilter[];

  @Metadata({ data: "json, name=MalwareName", elemType: shared.StringFilter })
  malwareName?: StringFilter[];

  @Metadata({ data: "json, name=MalwarePath", elemType: shared.StringFilter })
  malwarePath?: StringFilter[];

  @Metadata({ data: "json, name=MalwareState", elemType: shared.StringFilter })
  malwareState?: StringFilter[];

  @Metadata({ data: "json, name=MalwareType", elemType: shared.StringFilter })
  malwareType?: StringFilter[];

  @Metadata({ data: "json, name=NetworkDestinationDomain", elemType: shared.StringFilter })
  networkDestinationDomain?: StringFilter[];

  @Metadata({ data: "json, name=NetworkDestinationIpV4", elemType: shared.IpFilter })
  networkDestinationIpV4?: IpFilter[];

  @Metadata({ data: "json, name=NetworkDestinationIpV6", elemType: shared.IpFilter })
  networkDestinationIpV6?: IpFilter[];

  @Metadata({ data: "json, name=NetworkDestinationPort", elemType: shared.NumberFilter })
  networkDestinationPort?: NumberFilter[];

  @Metadata({ data: "json, name=NetworkDirection", elemType: shared.StringFilter })
  networkDirection?: StringFilter[];

  @Metadata({ data: "json, name=NetworkProtocol", elemType: shared.StringFilter })
  networkProtocol?: StringFilter[];

  @Metadata({ data: "json, name=NetworkSourceDomain", elemType: shared.StringFilter })
  networkSourceDomain?: StringFilter[];

  @Metadata({ data: "json, name=NetworkSourceIpV4", elemType: shared.IpFilter })
  networkSourceIpV4?: IpFilter[];

  @Metadata({ data: "json, name=NetworkSourceIpV6", elemType: shared.IpFilter })
  networkSourceIpV6?: IpFilter[];

  @Metadata({ data: "json, name=NetworkSourceMac", elemType: shared.StringFilter })
  networkSourceMac?: StringFilter[];

  @Metadata({ data: "json, name=NetworkSourcePort", elemType: shared.NumberFilter })
  networkSourcePort?: NumberFilter[];

  @Metadata({ data: "json, name=NoteText", elemType: shared.StringFilter })
  noteText?: StringFilter[];

  @Metadata({ data: "json, name=NoteUpdatedAt", elemType: shared.DateFilter })
  noteUpdatedAt?: DateFilter[];

  @Metadata({ data: "json, name=NoteUpdatedBy", elemType: shared.StringFilter })
  noteUpdatedBy?: StringFilter[];

  @Metadata({ data: "json, name=ProcessLaunchedAt", elemType: shared.DateFilter })
  processLaunchedAt?: DateFilter[];

  @Metadata({ data: "json, name=ProcessName", elemType: shared.StringFilter })
  processName?: StringFilter[];

  @Metadata({ data: "json, name=ProcessParentPid", elemType: shared.NumberFilter })
  processParentPid?: NumberFilter[];

  @Metadata({ data: "json, name=ProcessPath", elemType: shared.StringFilter })
  processPath?: StringFilter[];

  @Metadata({ data: "json, name=ProcessPid", elemType: shared.NumberFilter })
  processPid?: NumberFilter[];

  @Metadata({ data: "json, name=ProcessTerminatedAt", elemType: shared.DateFilter })
  processTerminatedAt?: DateFilter[];

  @Metadata({ data: "json, name=ProductArn", elemType: shared.StringFilter })
  productArn?: StringFilter[];

  @Metadata({ data: "json, name=ProductFields", elemType: shared.MapFilter })
  productFields?: MapFilter[];

  @Metadata({ data: "json, name=ProductName", elemType: shared.StringFilter })
  productName?: StringFilter[];

  @Metadata({ data: "json, name=RecommendationText", elemType: shared.StringFilter })
  recommendationText?: StringFilter[];

  @Metadata({ data: "json, name=RecordState", elemType: shared.StringFilter })
  recordState?: StringFilter[];

  @Metadata({ data: "json, name=Region", elemType: shared.StringFilter })
  region?: StringFilter[];

  @Metadata({ data: "json, name=RelatedFindingsId", elemType: shared.StringFilter })
  relatedFindingsId?: StringFilter[];

  @Metadata({ data: "json, name=RelatedFindingsProductArn", elemType: shared.StringFilter })
  relatedFindingsProductArn?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: shared.StringFilter })
  resourceAwsEc2InstanceIamInstanceProfileArn?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceImageId?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: shared.IpFilter })
  resourceAwsEc2InstanceIpV4Addresses?: IpFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: shared.IpFilter })
  resourceAwsEc2InstanceIpV6Addresses?: IpFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: shared.StringFilter })
  resourceAwsEc2InstanceKeyName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: shared.DateFilter })
  resourceAwsEc2InstanceLaunchedAt?: DateFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceSubnetId?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: shared.StringFilter })
  resourceAwsEc2InstanceType?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: shared.StringFilter })
  resourceAwsEc2InstanceVpcId?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: shared.DateFilter })
  resourceAwsIamAccessKeyCreatedAt?: DateFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyPrincipalName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyStatus?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: shared.StringFilter })
  resourceAwsIamAccessKeyUserName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: shared.StringFilter })
  resourceAwsIamUserUserName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: shared.StringFilter })
  resourceAwsS3BucketOwnerId?: StringFilter[];

  @Metadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: shared.StringFilter })
  resourceAwsS3BucketOwnerName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceContainerImageId", elemType: shared.StringFilter })
  resourceContainerImageId?: StringFilter[];

  @Metadata({ data: "json, name=ResourceContainerImageName", elemType: shared.StringFilter })
  resourceContainerImageName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: shared.DateFilter })
  resourceContainerLaunchedAt?: DateFilter[];

  @Metadata({ data: "json, name=ResourceContainerName", elemType: shared.StringFilter })
  resourceContainerName?: StringFilter[];

  @Metadata({ data: "json, name=ResourceDetailsOther", elemType: shared.MapFilter })
  resourceDetailsOther?: MapFilter[];

  @Metadata({ data: "json, name=ResourceId", elemType: shared.StringFilter })
  resourceId?: StringFilter[];

  @Metadata({ data: "json, name=ResourcePartition", elemType: shared.StringFilter })
  resourcePartition?: StringFilter[];

  @Metadata({ data: "json, name=ResourceRegion", elemType: shared.StringFilter })
  resourceRegion?: StringFilter[];

  @Metadata({ data: "json, name=ResourceTags", elemType: shared.MapFilter })
  resourceTags?: MapFilter[];

  @Metadata({ data: "json, name=ResourceType", elemType: shared.StringFilter })
  resourceType?: StringFilter[];

  @Metadata({ data: "json, name=SeverityLabel", elemType: shared.StringFilter })
  severityLabel?: StringFilter[];

  @Metadata({ data: "json, name=SeverityNormalized", elemType: shared.NumberFilter })
  severityNormalized?: NumberFilter[];

  @Metadata({ data: "json, name=SeverityProduct", elemType: shared.NumberFilter })
  severityProduct?: NumberFilter[];

  @Metadata({ data: "json, name=SourceUrl", elemType: shared.StringFilter })
  sourceUrl?: StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: shared.StringFilter })
  threatIntelIndicatorCategory?: StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: shared.DateFilter })
  threatIntelIndicatorLastObservedAt?: DateFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: shared.StringFilter })
  threatIntelIndicatorSource?: StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: shared.StringFilter })
  threatIntelIndicatorSourceUrl?: StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorType", elemType: shared.StringFilter })
  threatIntelIndicatorType?: StringFilter[];

  @Metadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: shared.StringFilter })
  threatIntelIndicatorValue?: StringFilter[];

  @Metadata({ data: "json, name=Title", elemType: shared.StringFilter })
  title?: StringFilter[];

  @Metadata({ data: "json, name=Type", elemType: shared.StringFilter })
  type?: StringFilter[];

  @Metadata({ data: "json, name=UpdatedAt", elemType: shared.DateFilter })
  updatedAt?: DateFilter[];

  @Metadata({ data: "json, name=UserDefinedFields", elemType: shared.MapFilter })
  userDefinedFields?: MapFilter[];

  @Metadata({ data: "json, name=VerificationState", elemType: shared.StringFilter })
  verificationState?: StringFilter[];

  @Metadata({ data: "json, name=WorkflowState", elemType: shared.StringFilter })
  workflowState?: StringFilter[];

  @Metadata({ data: "json, name=WorkflowStatus", elemType: shared.StringFilter })
  workflowStatus?: StringFilter[];
}
