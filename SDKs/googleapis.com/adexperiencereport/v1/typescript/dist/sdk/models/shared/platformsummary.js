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
export var PlatformSummaryBetterAdsStatusEnum;
(function (PlatformSummaryBetterAdsStatusEnum) {
    PlatformSummaryBetterAdsStatusEnum["Unknown"] = "UNKNOWN";
    PlatformSummaryBetterAdsStatusEnum["Passing"] = "PASSING";
    PlatformSummaryBetterAdsStatusEnum["Warning"] = "WARNING";
    PlatformSummaryBetterAdsStatusEnum["Failing"] = "FAILING";
})(PlatformSummaryBetterAdsStatusEnum || (PlatformSummaryBetterAdsStatusEnum = {}));
export var PlatformSummaryFilterStatusEnum;
(function (PlatformSummaryFilterStatusEnum) {
    PlatformSummaryFilterStatusEnum["Unknown"] = "UNKNOWN";
    PlatformSummaryFilterStatusEnum["On"] = "ON";
    PlatformSummaryFilterStatusEnum["Off"] = "OFF";
    PlatformSummaryFilterStatusEnum["Paused"] = "PAUSED";
    PlatformSummaryFilterStatusEnum["Pending"] = "PENDING";
})(PlatformSummaryFilterStatusEnum || (PlatformSummaryFilterStatusEnum = {}));
export var PlatformSummaryRegionEnum;
(function (PlatformSummaryRegionEnum) {
    PlatformSummaryRegionEnum["RegionUnknown"] = "REGION_UNKNOWN";
    PlatformSummaryRegionEnum["RegionA"] = "REGION_A";
    PlatformSummaryRegionEnum["RegionB"] = "REGION_B";
    PlatformSummaryRegionEnum["RegionC"] = "REGION_C";
})(PlatformSummaryRegionEnum || (PlatformSummaryRegionEnum = {}));
// PlatformSummary
/**
 * A site's Ad Experience Report summary on a single platform.
**/
var PlatformSummary = /** @class */ (function (_super) {
    __extends(PlatformSummary, _super);
    function PlatformSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=betterAdsStatus" }),
        __metadata("design:type", String)
    ], PlatformSummary.prototype, "betterAdsStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcementTime" }),
        __metadata("design:type", String)
    ], PlatformSummary.prototype, "enforcementTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=filterStatus" }),
        __metadata("design:type", String)
    ], PlatformSummary.prototype, "filterStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastChangeTime" }),
        __metadata("design:type", String)
    ], PlatformSummary.prototype, "lastChangeTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=region" }),
        __metadata("design:type", Array)
    ], PlatformSummary.prototype, "region", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reportUrl" }),
        __metadata("design:type", String)
    ], PlatformSummary.prototype, "reportUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=underReview" }),
        __metadata("design:type", Boolean)
    ], PlatformSummary.prototype, "underReview", void 0);
    return PlatformSummary;
}(SpeakeasyBase));
export { PlatformSummary };
