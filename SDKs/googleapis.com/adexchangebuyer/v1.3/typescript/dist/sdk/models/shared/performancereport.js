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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
// PerformanceReport
/**
 * The configuration data for an Ad Exchange performance report list.
**/
var PerformanceReport = /** @class */ (function (_super) {
    __extends(PerformanceReport, _super);
    function PerformanceReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=bidRate" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "bidRate", void 0);
    __decorate([
        Metadata({ data: "json, name=bidRequestRate" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "bidRequestRate", void 0);
    __decorate([
        Metadata({ data: "json, name=calloutStatusRate" }),
        __metadata("design:type", Array)
    ], PerformanceReport.prototype, "calloutStatusRate", void 0);
    __decorate([
        Metadata({ data: "json, name=cookieMatcherStatusRate" }),
        __metadata("design:type", Array)
    ], PerformanceReport.prototype, "cookieMatcherStatusRate", void 0);
    __decorate([
        Metadata({ data: "json, name=creativeStatusRate" }),
        __metadata("design:type", Array)
    ], PerformanceReport.prototype, "creativeStatusRate", void 0);
    __decorate([
        Metadata({ data: "json, name=filteredBidRate" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "filteredBidRate", void 0);
    __decorate([
        Metadata({ data: "json, name=hostedMatchStatusRate" }),
        __metadata("design:type", Array)
    ], PerformanceReport.prototype, "hostedMatchStatusRate", void 0);
    __decorate([
        Metadata({ data: "json, name=inventoryMatchRate" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "inventoryMatchRate", void 0);
    __decorate([
        Metadata({ data: "json, name=kind" }),
        __metadata("design:type", String)
    ], PerformanceReport.prototype, "kind", void 0);
    __decorate([
        Metadata({ data: "json, name=latency50thPercentile" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "latency50thPercentile", void 0);
    __decorate([
        Metadata({ data: "json, name=latency85thPercentile" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "latency85thPercentile", void 0);
    __decorate([
        Metadata({ data: "json, name=latency95thPercentile" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "latency95thPercentile", void 0);
    __decorate([
        Metadata({ data: "json, name=noQuotaInRegion" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "noQuotaInRegion", void 0);
    __decorate([
        Metadata({ data: "json, name=outOfQuota" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "outOfQuota", void 0);
    __decorate([
        Metadata({ data: "json, name=pixelMatchRequests" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "pixelMatchRequests", void 0);
    __decorate([
        Metadata({ data: "json, name=pixelMatchResponses" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "pixelMatchResponses", void 0);
    __decorate([
        Metadata({ data: "json, name=quotaConfiguredLimit" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "quotaConfiguredLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=quotaThrottledLimit" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "quotaThrottledLimit", void 0);
    __decorate([
        Metadata({ data: "json, name=region" }),
        __metadata("design:type", String)
    ], PerformanceReport.prototype, "region", void 0);
    __decorate([
        Metadata({ data: "json, name=successfulRequestRate" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "successfulRequestRate", void 0);
    __decorate([
        Metadata({ data: "json, name=timestamp" }),
        __metadata("design:type", String)
    ], PerformanceReport.prototype, "timestamp", void 0);
    __decorate([
        Metadata({ data: "json, name=unsuccessfulRequestRate" }),
        __metadata("design:type", Number)
    ], PerformanceReport.prototype, "unsuccessfulRequestRate", void 0);
    return PerformanceReport;
}(SpeakeasyBase));
export { PerformanceReport };
