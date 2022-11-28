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
import { Row } from "./row";
import { DimensionHeader } from "./dimensionheader";
import { ResponseMetaData } from "./responsemetadata";
import { MetricHeader } from "./metricheader";
import { PivotHeader } from "./pivotheader";
import { PropertyQuota } from "./propertyquota";
// RunPivotReportResponse
/**
 * The response pivot report table corresponding to a pivot request.
**/
var RunPivotReportResponse = /** @class */ (function (_super) {
    __extends(RunPivotReportResponse, _super);
    function RunPivotReportResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=aggregates", elemType: Row }),
        __metadata("design:type", Array)
    ], RunPivotReportResponse.prototype, "aggregates", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dimensionHeaders", elemType: DimensionHeader }),
        __metadata("design:type", Array)
    ], RunPivotReportResponse.prototype, "dimensionHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], RunPivotReportResponse.prototype, "kind", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", ResponseMetaData)
    ], RunPivotReportResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metricHeaders", elemType: MetricHeader }),
        __metadata("design:type", Array)
    ], RunPivotReportResponse.prototype, "metricHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=pivotHeaders", elemType: PivotHeader }),
        __metadata("design:type", Array)
    ], RunPivotReportResponse.prototype, "pivotHeaders", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=propertyQuota" }),
        __metadata("design:type", PropertyQuota)
    ], RunPivotReportResponse.prototype, "propertyQuota", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=rows", elemType: Row }),
        __metadata("design:type", Array)
    ], RunPivotReportResponse.prototype, "rows", void 0);
    return RunPivotReportResponse;
}(SpeakeasyBase));
export { RunPivotReportResponse };
