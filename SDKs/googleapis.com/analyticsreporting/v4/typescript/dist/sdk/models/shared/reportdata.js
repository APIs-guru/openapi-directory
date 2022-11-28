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
import { DateRangeValues } from "./daterangevalues";
import { ReportRow } from "./reportrow";
// ReportData
/**
 * The data part of the report.
**/
var ReportData = /** @class */ (function (_super) {
    __extends(ReportData, _super);
    function ReportData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dataLastRefreshed" }),
        __metadata("design:type", String)
    ], ReportData.prototype, "dataLastRefreshed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=emptyReason" }),
        __metadata("design:type", String)
    ], ReportData.prototype, "emptyReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDataGolden" }),
        __metadata("design:type", Boolean)
    ], ReportData.prototype, "isDataGolden", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maximums", elemType: DateRangeValues }),
        __metadata("design:type", Array)
    ], ReportData.prototype, "maximums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minimums", elemType: DateRangeValues }),
        __metadata("design:type", Array)
    ], ReportData.prototype, "minimums", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rowCount" }),
        __metadata("design:type", Number)
    ], ReportData.prototype, "rowCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: ReportRow }),
        __metadata("design:type", Array)
    ], ReportData.prototype, "rows", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplesReadCounts" }),
        __metadata("design:type", Array)
    ], ReportData.prototype, "samplesReadCounts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=samplingSpaceSizes" }),
        __metadata("design:type", Array)
    ], ReportData.prototype, "samplingSpaceSizes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=totals", elemType: DateRangeValues }),
        __metadata("design:type", Array)
    ], ReportData.prototype, "totals", void 0);
    return ReportData;
}(SpeakeasyBase));
export { ReportData };
