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
import { CodeScanningAnalysisTool } from "./codescanninganalysistool";
var CodeScanningAnalysis = /** @class */ (function (_super) {
    __extends(CodeScanningAnalysis, _super);
    function CodeScanningAnalysis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=analysis_key" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "analysisKey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=category" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "category", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=commit_sha" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "commitSha", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], CodeScanningAnalysis.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deletable" }),
        __metadata("design:type", Boolean)
    ], CodeScanningAnalysis.prototype, "deletable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=error" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], CodeScanningAnalysis.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ref" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "ref", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=results_count" }),
        __metadata("design:type", Number)
    ], CodeScanningAnalysis.prototype, "resultsCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rules_count" }),
        __metadata("design:type", Number)
    ], CodeScanningAnalysis.prototype, "rulesCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sarif_id" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "sarifId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tool" }),
        __metadata("design:type", CodeScanningAnalysisTool)
    ], CodeScanningAnalysis.prototype, "tool", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=url" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "url", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=warning" }),
        __metadata("design:type", String)
    ], CodeScanningAnalysis.prototype, "warning", void 0);
    return CodeScanningAnalysis;
}(SpeakeasyBase));
export { CodeScanningAnalysis };
