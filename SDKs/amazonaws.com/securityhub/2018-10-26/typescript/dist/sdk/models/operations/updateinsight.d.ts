import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateInsightPathParams extends SpeakeasyBase {
    insightArn: string;
}
export declare class UpdateInsightHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
export declare class UpdateInsightRequestBodyFilters extends SpeakeasyBase {
    awsAccountId?: shared.StringFilter[];
    companyName?: shared.StringFilter[];
    complianceStatus?: shared.StringFilter[];
    confidence?: shared.NumberFilter[];
    createdAt?: shared.DateFilter[];
    criticality?: shared.NumberFilter[];
    description?: shared.StringFilter[];
    findingProviderFieldsConfidence?: shared.NumberFilter[];
    findingProviderFieldsCriticality?: shared.NumberFilter[];
    findingProviderFieldsRelatedFindingsId?: shared.StringFilter[];
    findingProviderFieldsRelatedFindingsProductArn?: shared.StringFilter[];
    findingProviderFieldsSeverityLabel?: shared.StringFilter[];
    findingProviderFieldsSeverityOriginal?: shared.StringFilter[];
    findingProviderFieldsTypes?: shared.StringFilter[];
    firstObservedAt?: shared.DateFilter[];
    generatorId?: shared.StringFilter[];
    id?: shared.StringFilter[];
    keyword?: shared.KeywordFilter[];
    lastObservedAt?: shared.DateFilter[];
    malwareName?: shared.StringFilter[];
    malwarePath?: shared.StringFilter[];
    malwareState?: shared.StringFilter[];
    malwareType?: shared.StringFilter[];
    networkDestinationDomain?: shared.StringFilter[];
    networkDestinationIpV4?: shared.IpFilter[];
    networkDestinationIpV6?: shared.IpFilter[];
    networkDestinationPort?: shared.NumberFilter[];
    networkDirection?: shared.StringFilter[];
    networkProtocol?: shared.StringFilter[];
    networkSourceDomain?: shared.StringFilter[];
    networkSourceIpV4?: shared.IpFilter[];
    networkSourceIpV6?: shared.IpFilter[];
    networkSourceMac?: shared.StringFilter[];
    networkSourcePort?: shared.NumberFilter[];
    noteText?: shared.StringFilter[];
    noteUpdatedAt?: shared.DateFilter[];
    noteUpdatedBy?: shared.StringFilter[];
    processLaunchedAt?: shared.DateFilter[];
    processName?: shared.StringFilter[];
    processParentPid?: shared.NumberFilter[];
    processPath?: shared.StringFilter[];
    processPid?: shared.NumberFilter[];
    processTerminatedAt?: shared.DateFilter[];
    productArn?: shared.StringFilter[];
    productFields?: shared.MapFilter[];
    productName?: shared.StringFilter[];
    recommendationText?: shared.StringFilter[];
    recordState?: shared.StringFilter[];
    region?: shared.StringFilter[];
    relatedFindingsId?: shared.StringFilter[];
    relatedFindingsProductArn?: shared.StringFilter[];
    resourceAwsEc2InstanceIamInstanceProfileArn?: shared.StringFilter[];
    resourceAwsEc2InstanceImageId?: shared.StringFilter[];
    resourceAwsEc2InstanceIpV4Addresses?: shared.IpFilter[];
    resourceAwsEc2InstanceIpV6Addresses?: shared.IpFilter[];
    resourceAwsEc2InstanceKeyName?: shared.StringFilter[];
    resourceAwsEc2InstanceLaunchedAt?: shared.DateFilter[];
    resourceAwsEc2InstanceSubnetId?: shared.StringFilter[];
    resourceAwsEc2InstanceType?: shared.StringFilter[];
    resourceAwsEc2InstanceVpcId?: shared.StringFilter[];
    resourceAwsIamAccessKeyCreatedAt?: shared.DateFilter[];
    resourceAwsIamAccessKeyPrincipalName?: shared.StringFilter[];
    resourceAwsIamAccessKeyStatus?: shared.StringFilter[];
    resourceAwsIamAccessKeyUserName?: shared.StringFilter[];
    resourceAwsIamUserUserName?: shared.StringFilter[];
    resourceAwsS3BucketOwnerId?: shared.StringFilter[];
    resourceAwsS3BucketOwnerName?: shared.StringFilter[];
    resourceContainerImageId?: shared.StringFilter[];
    resourceContainerImageName?: shared.StringFilter[];
    resourceContainerLaunchedAt?: shared.DateFilter[];
    resourceContainerName?: shared.StringFilter[];
    resourceDetailsOther?: shared.MapFilter[];
    resourceId?: shared.StringFilter[];
    resourcePartition?: shared.StringFilter[];
    resourceRegion?: shared.StringFilter[];
    resourceTags?: shared.MapFilter[];
    resourceType?: shared.StringFilter[];
    severityLabel?: shared.StringFilter[];
    severityNormalized?: shared.NumberFilter[];
    severityProduct?: shared.NumberFilter[];
    sourceUrl?: shared.StringFilter[];
    threatIntelIndicatorCategory?: shared.StringFilter[];
    threatIntelIndicatorLastObservedAt?: shared.DateFilter[];
    threatIntelIndicatorSource?: shared.StringFilter[];
    threatIntelIndicatorSourceUrl?: shared.StringFilter[];
    threatIntelIndicatorType?: shared.StringFilter[];
    threatIntelIndicatorValue?: shared.StringFilter[];
    title?: shared.StringFilter[];
    type?: shared.StringFilter[];
    updatedAt?: shared.DateFilter[];
    userDefinedFields?: shared.MapFilter[];
    verificationState?: shared.StringFilter[];
    workflowState?: shared.StringFilter[];
    workflowStatus?: shared.StringFilter[];
}
export declare class UpdateInsightRequestBody extends SpeakeasyBase {
    filters?: UpdateInsightRequestBodyFilters;
    groupByAttribute?: string;
    name?: string;
}
export declare class UpdateInsightRequest extends SpeakeasyBase {
    pathParams: UpdateInsightPathParams;
    headers: UpdateInsightHeaders;
    request: UpdateInsightRequestBody;
}
export declare class UpdateInsightResponse extends SpeakeasyBase {
    contentType: string;
    internalException?: any;
    invalidAccessException?: any;
    invalidInputException?: any;
    limitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateInsightResponse?: Map<string, any>;
}
