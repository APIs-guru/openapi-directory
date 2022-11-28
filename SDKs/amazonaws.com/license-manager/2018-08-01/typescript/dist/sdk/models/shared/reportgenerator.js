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
import { ReportContext } from "./reportcontext";
import { ReportFrequency } from "./reportfrequency";
import { S3Location } from "./s3location";
import { Tag } from "./tag";
// ReportGenerator
/**
 * Describe the details of a report generator.
**/
var ReportGenerator = /** @class */ (function (_super) {
    __extends(ReportGenerator, _super);
    function ReportGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CreateTime" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Description" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "description", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastReportGenerationTime" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "lastReportGenerationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastRunFailureReason" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "lastRunFailureReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastRunStatus" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "lastRunStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LicenseManagerReportGeneratorArn" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "licenseManagerReportGeneratorArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportContext" }),
        __metadata("design:type", ReportContext)
    ], ReportGenerator.prototype, "reportContext", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportCreatorAccount" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "reportCreatorAccount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportFrequency" }),
        __metadata("design:type", ReportFrequency)
    ], ReportGenerator.prototype, "reportFrequency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportGeneratorName" }),
        __metadata("design:type", String)
    ], ReportGenerator.prototype, "reportGeneratorName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ReportType" }),
        __metadata("design:type", Array)
    ], ReportGenerator.prototype, "reportType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=S3Location" }),
        __metadata("design:type", S3Location)
    ], ReportGenerator.prototype, "s3Location", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Tags", elemType: Tag }),
        __metadata("design:type", Array)
    ], ReportGenerator.prototype, "tags", void 0);
    return ReportGenerator;
}(SpeakeasyBase));
export { ReportGenerator };
