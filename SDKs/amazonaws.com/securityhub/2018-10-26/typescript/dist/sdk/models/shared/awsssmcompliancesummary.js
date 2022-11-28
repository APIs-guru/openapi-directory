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
// AwsSsmComplianceSummary
/**
 * Provides the details about the compliance status for a patch.
**/
var AwsSsmComplianceSummary = /** @class */ (function (_super) {
    __extends(AwsSsmComplianceSummary, _super);
    function AwsSsmComplianceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ComplianceType" }),
        __metadata("design:type", String)
    ], AwsSsmComplianceSummary.prototype, "complianceType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompliantCriticalCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "compliantCriticalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompliantHighCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "compliantHighCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompliantInformationalCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "compliantInformationalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompliantLowCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "compliantLowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompliantMediumCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "compliantMediumCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CompliantUnspecifiedCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "compliantUnspecifiedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ExecutionType" }),
        __metadata("design:type", String)
    ], AwsSsmComplianceSummary.prototype, "executionType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonCompliantCriticalCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "nonCompliantCriticalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonCompliantHighCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "nonCompliantHighCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonCompliantInformationalCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "nonCompliantInformationalCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonCompliantLowCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "nonCompliantLowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonCompliantMediumCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "nonCompliantMediumCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NonCompliantUnspecifiedCount" }),
        __metadata("design:type", Number)
    ], AwsSsmComplianceSummary.prototype, "nonCompliantUnspecifiedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OverallSeverity" }),
        __metadata("design:type", String)
    ], AwsSsmComplianceSummary.prototype, "overallSeverity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PatchBaselineId" }),
        __metadata("design:type", String)
    ], AwsSsmComplianceSummary.prototype, "patchBaselineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PatchGroup" }),
        __metadata("design:type", String)
    ], AwsSsmComplianceSummary.prototype, "patchGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], AwsSsmComplianceSummary.prototype, "status", void 0);
    return AwsSsmComplianceSummary;
}(SpeakeasyBase));
export { AwsSsmComplianceSummary };
