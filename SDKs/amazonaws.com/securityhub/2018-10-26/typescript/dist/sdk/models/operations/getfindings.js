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
var GetFindingsQueryParams = /** @class */ (function (_super) {
    __extends(GetFindingsQueryParams, _super);
    function GetFindingsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxResults" }),
        __metadata("design:type", String)
    ], GetFindingsQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=NextToken" }),
        __metadata("design:type", String)
    ], GetFindingsQueryParams.prototype, "nextToken", void 0);
    return GetFindingsQueryParams;
}(SpeakeasyBase));
export { GetFindingsQueryParams };
var GetFindingsHeaders = /** @class */ (function (_super) {
    __extends(GetFindingsHeaders, _super);
    function GetFindingsHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzAlgorithm", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzContentSha256", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzCredential", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzSecurityToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzSignature", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" }),
        __metadata("design:type", String)
    ], GetFindingsHeaders.prototype, "xAmzSignedHeaders", void 0);
    return GetFindingsHeaders;
}(SpeakeasyBase));
export { GetFindingsHeaders };
// GetFindingsRequestBodyFilters
/**
 * <p>A collection of attributes that are applied to all active Security Hub-aggregated findings and that result in a subset of findings that are included in this insight.</p> <p>You can filter by up to 10 finding attributes. For each attribute, you can provide up to 20 filter values.</p>
**/
var GetFindingsRequestBodyFilters = /** @class */ (function (_super) {
    __extends(GetFindingsRequestBodyFilters, _super);
    function GetFindingsRequestBodyFilters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsAccountId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComplianceStatus", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "complianceStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Criticality", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "criticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsConfidence", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsConfidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsCriticality", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsCriticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsRelatedFindingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsRelatedFindingsProductArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsRelatedFindingsProductArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityLabel", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsSeverityLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsSeverityOriginal", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsSeverityOriginal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFieldsTypes", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "findingProviderFieldsTypes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstObservedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "firstObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeneratorId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "generatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Keyword", elemType: shared.KeywordFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "keyword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastObservedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "lastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "malwareName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwarePath", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "malwarePath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "malwareState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MalwareType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "malwareType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationDomain", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkDestinationDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV4", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkDestinationIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationIpV6", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkDestinationIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDestinationPort", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkDestinationPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkDirection", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkDirection", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkProtocol", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkProtocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceDomain", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkSourceDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV4", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkSourceIpV4", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceIpV6", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkSourceIpV6", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourceMac", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkSourceMac", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkSourcePort", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "networkSourcePort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteText", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "noteText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteUpdatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "noteUpdatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NoteUpdatedBy", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "noteUpdatedBy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessLaunchedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "processLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "processName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessParentPid", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "processParentPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessPath", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "processPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessPid", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "processPid", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProcessTerminatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "processTerminatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "productArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductFields", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "productFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecommendationText", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "recommendationText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "recordState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindingsId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "relatedFindingsId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindingsProductArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "relatedFindingsProductArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIamInstanceProfileArn", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceIamInstanceProfileArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceImageId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV4Addresses", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceIpV4Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceIpV6Addresses", elemType: shared.IpFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceIpV6Addresses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceKeyName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceKeyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceLaunchedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceSubnetId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceSubnetId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsEc2InstanceVpcId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsEc2InstanceVpcId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyCreatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsIamAccessKeyCreatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyPrincipalName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsIamAccessKeyPrincipalName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyStatus", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsIamAccessKeyStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamAccessKeyUserName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsIamAccessKeyUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsIamUserUserName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsIamUserUserName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsS3BucketOwnerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceAwsS3BucketOwnerName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceAwsS3BucketOwnerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerImageId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceContainerImageId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerImageName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceContainerImageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerLaunchedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceContainerLaunchedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceContainerName", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceContainerName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceDetailsOther", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceDetailsOther", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceId", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourcePartition", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourcePartition", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceRegion", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceRegion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceTags", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceTags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "resourceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityLabel", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "severityLabel", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityNormalized", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "severityNormalized", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SeverityProduct", elemType: shared.NumberFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "severityProduct", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceUrl", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorCategory", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "threatIntelIndicatorCategory", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorLastObservedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "threatIntelIndicatorLastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSource", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "threatIntelIndicatorSource", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorSourceUrl", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "threatIntelIndicatorSourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorType", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "threatIntelIndicatorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicatorValue", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "threatIntelIndicatorValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Type", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedAt", elemType: shared.DateFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserDefinedFields", elemType: shared.MapFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "userDefinedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "verificationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowState", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "workflowState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowStatus", elemType: shared.StringFilter }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBodyFilters.prototype, "workflowStatus", void 0);
    return GetFindingsRequestBodyFilters;
}(SpeakeasyBase));
export { GetFindingsRequestBodyFilters };
var GetFindingsRequestBody = /** @class */ (function (_super) {
    __extends(GetFindingsRequestBody, _super);
    function GetFindingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Filters" }),
        __metadata("design:type", GetFindingsRequestBodyFilters)
    ], GetFindingsRequestBody.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MaxResults" }),
        __metadata("design:type", Number)
    ], GetFindingsRequestBody.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NextToken" }),
        __metadata("design:type", String)
    ], GetFindingsRequestBody.prototype, "nextToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SortCriteria", elemType: shared.SortCriterion }),
        __metadata("design:type", Array)
    ], GetFindingsRequestBody.prototype, "sortCriteria", void 0);
    return GetFindingsRequestBody;
}(SpeakeasyBase));
export { GetFindingsRequestBody };
var GetFindingsRequest = /** @class */ (function (_super) {
    __extends(GetFindingsRequest, _super);
    function GetFindingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFindingsQueryParams)
    ], GetFindingsRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetFindingsHeaders)
    ], GetFindingsRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GetFindingsRequestBody)
    ], GetFindingsRequest.prototype, "request", void 0);
    return GetFindingsRequest;
}(SpeakeasyBase));
export { GetFindingsRequest };
var GetFindingsResponse = /** @class */ (function (_super) {
    __extends(GetFindingsResponse, _super);
    function GetFindingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetFindingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.GetFindingsResponse)
    ], GetFindingsResponse.prototype, "getFindingsResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsResponse.prototype, "internalException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsResponse.prototype, "invalidAccessException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsResponse.prototype, "invalidInputException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Object)
    ], GetFindingsResponse.prototype, "limitExceededException", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetFindingsResponse.prototype, "statusCode", void 0);
    return GetFindingsResponse;
}(SpeakeasyBase));
export { GetFindingsResponse };
