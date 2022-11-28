var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var AwsSecurityFindingFilters = /** @class */ (function (_super) {
    __extends(AwsSecurityFindingFilters, _super);
    function AwsSecurityFindingFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsAccountId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComplianceStatus", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "complianceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Criticality", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "criticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsCriticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsRelatedFindingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsRelatedFindingsProductArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsSeverityLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsSeverityOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsTypes", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "findingProviderFieldsTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstObservedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "firstObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeneratorId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "generatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keyword", elemType: KeywordFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "keyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastObservedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "lastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "malwareName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwarePath", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "malwarePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareState", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "malwareState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareType", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "malwareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationDomain", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkDestinationDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV4", elemType: IpFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkDestinationIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV6", elemType: IpFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkDestinationIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationPort", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkDestinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDirection", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkProtocol", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceDomain", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkSourceDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV4", elemType: IpFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkSourceIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV6", elemType: IpFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkSourceIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceMac", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkSourceMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourcePort", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "networkSourcePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteText", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "noteText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteUpdatedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "noteUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteUpdatedBy", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "noteUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessLaunchedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "processLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "processName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessParentPid", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "processParentPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessPath", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "processPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessPid", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "processPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessTerminatedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "processTerminatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductArn", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "productArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductFields", elemType: MapFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "productFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationText", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "recommendationText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordState", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "recordState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindingsId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "relatedFindingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindingsProductArn", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "relatedFindingsProductArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceIamInstanceProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: IpFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceIpV4Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: IpFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceIpV6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsEc2InstanceVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsIamAccessKeyCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsIamAccessKeyPrincipalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsIamAccessKeyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsIamAccessKeyUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsIamUserUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsS3BucketOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceAwsS3BucketOwnerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerImageId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceContainerImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerImageName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceContainerImageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceContainerLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerName", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceContainerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceDetailsOther", elemType: MapFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceDetailsOther", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourcePartition", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourcePartition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceRegion", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: MapFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityLabel", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "severityLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityNormalized", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "severityNormalized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityProduct", elemType: NumberFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "severityProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceUrl", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "threatIntelIndicatorCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "threatIntelIndicatorLastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "threatIntelIndicatorSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "threatIntelIndicatorSourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorType", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "threatIntelIndicatorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "threatIntelIndicatorValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedAt", elemType: DateFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserDefinedFields", elemType: MapFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "userDefinedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationState", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "verificationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowState", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "workflowState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowStatus", elemType: StringFilter }),
        __metadata("design:type", Array)
    ], AwsSecurityFindingFilters.prototype, "workflowStatus", void 0);
    return AwsSecurityFindingFilters;
}(SpeakeasyBase));
export { AwsSecurityFindingFilters };
