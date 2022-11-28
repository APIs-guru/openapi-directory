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
import * as shared from "../shared";
var CreateInsightHeaders = /** @class */ (function (_super) {
    __extends(CreateInsightHeaders, _super);
    function CreateInsightHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], CreateInsightHeaders.prototype, "xAmzSignedHeaders", void 0);
    return CreateInsightHeaders;
}(SpeakeasyBase));
export { CreateInsightHeaders };
// CreateInsightRequestBodyFilters
/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
var CreateInsightRequestBodyFilters = /** @class */ (function (_super) {
    __extends(CreateInsightRequestBodyFilters, _super);
    function CreateInsightRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsAccountId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComplianceStatus", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "complianceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Criticality", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "criticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsCriticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsRelatedFindingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsRelatedFindingsProductArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsSeverityLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsSeverityOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsTypes", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "findingProviderFieldsTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstObservedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "firstObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeneratorId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "generatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keyword", elemType: shared.KeywordFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "keyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastObservedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "lastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "malwareName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwarePath", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "malwarePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "malwareState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "malwareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationDomain", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkDestinationDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV4", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkDestinationIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV6", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkDestinationIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationPort", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkDestinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDirection", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkProtocol", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceDomain", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkSourceDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV4", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkSourceIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV6", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkSourceIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceMac", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkSourceMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourcePort", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "networkSourcePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteText", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "noteText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteUpdatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "noteUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteUpdatedBy", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "noteUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessLaunchedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "processLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "processName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessParentPid", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "processParentPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessPath", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "processPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessPid", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "processPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessTerminatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "processTerminatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "productArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductFields", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "productFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationText", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "recommendationText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "recordState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindingsId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "relatedFindingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindingsProductArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "relatedFindingsProductArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceIamInstanceProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceIpV4Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceIpV6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsEc2InstanceVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsIamAccessKeyCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsIamAccessKeyPrincipalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsIamAccessKeyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsIamAccessKeyUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsIamUserUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsS3BucketOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceAwsS3BucketOwnerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerImageId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceContainerImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerImageName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceContainerImageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceContainerLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceContainerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceDetailsOther", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceDetailsOther", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourcePartition", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourcePartition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceRegion", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityLabel", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "severityLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityNormalized", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "severityNormalized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityProduct", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "severityProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceUrl", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "threatIntelIndicatorCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "threatIntelIndicatorLastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "threatIntelIndicatorSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "threatIntelIndicatorSourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "threatIntelIndicatorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "threatIntelIndicatorValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserDefinedFields", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "userDefinedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "verificationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "workflowState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowStatus", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], CreateInsightRequestBodyFilters.prototype, "workflowStatus", void 0);
    return CreateInsightRequestBodyFilters;
}(SpeakeasyBase));
export { CreateInsightRequestBodyFilters };
var CreateInsightRequestBody = /** @class */ (function (_super) {
    __extends(CreateInsightRequestBody, _super);
    function CreateInsightRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filters" }),
        __metadata("design:type", CreateInsightRequestBodyFilters)
    ], CreateInsightRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupByAttribute" }),
        __metadata("design:type", String)
    ], CreateInsightRequestBody.prototype, "groupByAttribute", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Name" }),
        __metadata("design:type", String)
    ], CreateInsightRequestBody.prototype, "name", void 0);
    return CreateInsightRequestBody;
}(SpeakeasyBase));
export { CreateInsightRequestBody };
var CreateInsightRequest = /** @class */ (function (_super) {
    __extends(CreateInsightRequest, _super);
    function CreateInsightRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateInsightHeaders)
    ], CreateInsightRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", CreateInsightRequestBody)
    ], CreateInsightRequest.prototype, "request", void 0);
    return CreateInsightRequest;
}(SpeakeasyBase));
export { CreateInsightRequest };
var CreateInsightResponse = /** @class */ (function (_super) {
    __extends(CreateInsightResponse, _super);
    function CreateInsightResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateInsightResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CreateInsightResponse)
    ], CreateInsightResponse.prototype, "createInsightResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInsightResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInsightResponse.prototype, "invalidAccessException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInsightResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInsightResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], CreateInsightResponse.prototype, "resourceConflictException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateInsightResponse.prototype, "statusCode", void 0);
    return CreateInsightResponse;
}(SpeakeasyBase));
export { CreateInsightResponse };
