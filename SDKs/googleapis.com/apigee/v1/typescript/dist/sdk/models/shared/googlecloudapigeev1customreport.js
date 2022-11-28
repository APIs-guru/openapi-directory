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
import { GoogleCloudApigeeV1CustomReportMetric } from "./googlecloudapigeev1customreportmetric";
import { GoogleCloudApigeeV1ReportProperty } from "./googlecloudapigeev1reportproperty";
var GoogleCloudApigeeV1CustomReportInput = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1CustomReportInput, _super);
    function GoogleCloudApigeeV1CustomReportInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chartType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "chartType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "fromTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1CustomReportMetric }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudApigeeV1ReportProperty }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortByCols" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "sortByCols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeUnit" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "timeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "toTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topk" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReportInput.prototype, "topk", void 0);
    return GoogleCloudApigeeV1CustomReportInput;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1CustomReportInput };
var GoogleCloudApigeeV1CustomReport = /** @class */ (function (_super) {
    __extends(GoogleCloudApigeeV1CustomReport, _super);
    function GoogleCloudApigeeV1CustomReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=chartType" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "chartType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=comments" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReport.prototype, "comments", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createdAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensions" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReport.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=environment" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "environment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filter" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fromTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "fromTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastModifiedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "lastModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastViewedAt" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "lastViewedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=limit" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "limit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metrics", elemType: GoogleCloudApigeeV1CustomReportMetric }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReport.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=offset" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "offset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=organization" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "organization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=properties", elemType: GoogleCloudApigeeV1ReportProperty }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReport.prototype, "properties", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortByCols" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReport.prototype, "sortByCols", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sortOrder" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tags" }),
        __metadata("design:type", Array)
    ], GoogleCloudApigeeV1CustomReport.prototype, "tags", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=timeUnit" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "timeUnit", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=toTime" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "toTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=topk" }),
        __metadata("design:type", String)
    ], GoogleCloudApigeeV1CustomReport.prototype, "topk", void 0);
    return GoogleCloudApigeeV1CustomReport;
}(SpeakeasyBase));
export { GoogleCloudApigeeV1CustomReport };
