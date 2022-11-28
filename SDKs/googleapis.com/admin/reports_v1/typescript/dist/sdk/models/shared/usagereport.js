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
// UsageReportEntity
/**
 * Output only. Information about the type of the item.
**/
var UsageReportEntity = /** @class */ (function (_super) {
    __extends(UsageReportEntity, _super);
    function UsageReportEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerId" }),
        __metadata("design:type", String)
    ], UsageReportEntity.prototype, "customerId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entityId" }),
        __metadata("design:type", String)
    ], UsageReportEntity.prototype, "entityId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=profileId" }),
        __metadata("design:type", String)
    ], UsageReportEntity.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], UsageReportEntity.prototype, "type", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=userEmail" }),
        __metadata("design:type", String)
    ], UsageReportEntity.prototype, "userEmail", void 0);
    return UsageReportEntity;
}(SpeakeasyBase));
export { UsageReportEntity };
var UsageReportParameters = /** @class */ (function (_super) {
    __extends(UsageReportParameters, _super);
    function UsageReportParameters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=boolValue" }),
        __metadata("design:type", Boolean)
    ], UsageReportParameters.prototype, "boolValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=datetimeValue" }),
        __metadata("design:type", Date)
    ], UsageReportParameters.prototype, "datetimeValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=intValue" }),
        __metadata("design:type", String)
    ], UsageReportParameters.prototype, "intValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=msgValue" }),
        __metadata("design:type", Array)
    ], UsageReportParameters.prototype, "msgValue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UsageReportParameters.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=stringValue" }),
        __metadata("design:type", String)
    ], UsageReportParameters.prototype, "stringValue", void 0);
    return UsageReportParameters;
}(SpeakeasyBase));
export { UsageReportParameters };
// UsageReport
/**
 * JSON template for a usage report.
**/
var UsageReport = /** @class */ (function (_super) {
    __extends(UsageReport, _super);
    function UsageReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=date" }),
        __metadata("design:type", String)
    ], UsageReport.prototype, "date", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=entity" }),
        __metadata("design:type", UsageReportEntity)
    ], UsageReport.prototype, "entity", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=etag" }),
        __metadata("design:type", String)
    ], UsageReport.prototype, "etag", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], UsageReport.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=parameters", elemType: UsageReportParameters }),
        __metadata("design:type", Array)
    ], UsageReport.prototype, "parameters", void 0);
    return UsageReport;
}(SpeakeasyBase));
export { UsageReport };
