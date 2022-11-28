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
import { Action } from "./action";
import { Compliance } from "./compliance";
import { FindingProviderFields } from "./findingproviderfields";
import { Malware } from "./malware";
import { Network } from "./network";
import { NetworkPathComponent } from "./networkpathcomponent";
import { Note } from "./note";
import { PatchSummary } from "./patchsummary";
import { ProcessDetails } from "./processdetails";
import { RecordStateEnum } from "./recordstateenum";
import { RelatedFinding } from "./relatedfinding";
import { Remediation } from "./remediation";
import { Resource } from "./resource";
import { Severity } from "./severity";
import { ThreatIntelIndicator } from "./threatintelindicator";
import { VerificationStateEnum } from "./verificationstateenum";
import { Vulnerability } from "./vulnerability";
import { Workflow } from "./workflow";
import { WorkflowStateEnum } from "./workflowstateenum";
// AwsSecurityFinding
/**
 * <p>Provides consistent format for the contents of the Security Hub-aggregated findings. <code>AwsSecurityFinding</code> format enables you to share findings between Amazon Web Services security services and third-party solutions, and security standards checks.</p> <note> <p>A finding is a potential security issue generated either by Amazon Web Services services or by the integrated third-party solutions and standards checks.</p> </note>
**/
var AwsSecurityFinding = /** @class */ (function (_super) {
    __extends(AwsSecurityFinding, _super);
    function AwsSecurityFinding() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Action" }),
        __metadata("design:type", Action)
    ], AwsSecurityFinding.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AwsAccountId" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "awsAccountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompanyName" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "companyName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Compliance" }),
        __metadata("design:type", Compliance)
    ], AwsSecurityFinding.prototype, "compliance", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Confidence" }),
        __metadata("design:type", Number)
    ], AwsSecurityFinding.prototype, "confidence", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreatedAt" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Criticality" }),
        __metadata("design:type", Number)
    ], AwsSecurityFinding.prototype, "criticality", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FindingProviderFields" }),
        __metadata("design:type", FindingProviderFields)
    ], AwsSecurityFinding.prototype, "findingProviderFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FirstObservedAt" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "firstObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GeneratorId" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "generatorId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastObservedAt" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "lastObservedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Malware", elemType: Malware }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "malware", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Network" }),
        __metadata("design:type", Network)
    ], AwsSecurityFinding.prototype, "network", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NetworkPath", elemType: NetworkPathComponent }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "networkPath", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Note" }),
        __metadata("design:type", Note)
    ], AwsSecurityFinding.prototype, "note", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PatchSummary" }),
        __metadata("design:type", PatchSummary)
    ], AwsSecurityFinding.prototype, "patchSummary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Process" }),
        __metadata("design:type", ProcessDetails)
    ], AwsSecurityFinding.prototype, "process", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductArn" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "productArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductFields" }),
        __metadata("design:type", Map)
    ], AwsSecurityFinding.prototype, "productFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ProductName" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "productName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RecordState" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "recordState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Region" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RelatedFindings", elemType: RelatedFinding }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "relatedFindings", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Remediation" }),
        __metadata("design:type", Remediation)
    ], AwsSecurityFinding.prototype, "remediation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Resources", elemType: Resource }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "resources", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SchemaVersion" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "schemaVersion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Severity" }),
        __metadata("design:type", Severity)
    ], AwsSecurityFinding.prototype, "severity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SourceUrl" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "sourceUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ThreatIntelIndicators", elemType: ThreatIntelIndicator }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "threatIntelIndicators", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Title" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "title", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Types" }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "types", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UpdatedAt" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UserDefinedFields" }),
        __metadata("design:type", Map)
    ], AwsSecurityFinding.prototype, "userDefinedFields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=VerificationState" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "verificationState", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Vulnerabilities", elemType: Vulnerability }),
        __metadata("design:type", Array)
    ], AwsSecurityFinding.prototype, "vulnerabilities", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Workflow" }),
        __metadata("design:type", Workflow)
    ], AwsSecurityFinding.prototype, "workflow", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=WorkflowState" }),
        __metadata("design:type", String)
    ], AwsSecurityFinding.prototype, "workflowState", void 0);
    return AwsSecurityFinding;
}(SpeakeasyBase));
export { AwsSecurityFinding };
