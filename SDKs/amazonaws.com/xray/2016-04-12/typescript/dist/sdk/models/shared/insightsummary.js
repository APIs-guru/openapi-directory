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
import { RequestImpactStatistics } from "./requestimpactstatistics";
import { ServiceId } from "./serviceid";
import { InsightStateEnum } from "./insightstateenum";
import { AnomalousService } from "./anomalousservice";
// InsightSummary
/**
 * Information that describes an insight.
**/
var InsightSummary = /** @class */ (function (_super) {
    __extends(InsightSummary, _super);
    function InsightSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Categories" }),
        __metadata("design:type", Array)
    ], InsightSummary.prototype, "categories", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientRequestImpactStatistics" }),
        __metadata("design:type", RequestImpactStatistics)
    ], InsightSummary.prototype, "clientRequestImpactStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EndTime" }),
        __metadata("design:type", Date)
    ], InsightSummary.prototype, "endTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupARN" }),
        __metadata("design:type", String)
    ], InsightSummary.prototype, "groupArn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=GroupName" }),
        __metadata("design:type", String)
    ], InsightSummary.prototype, "groupName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InsightId" }),
        __metadata("design:type", String)
    ], InsightSummary.prototype, "insightId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastUpdateTime" }),
        __metadata("design:type", Date)
    ], InsightSummary.prototype, "lastUpdateTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootCauseServiceId" }),
        __metadata("design:type", ServiceId)
    ], InsightSummary.prototype, "rootCauseServiceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootCauseServiceRequestImpactStatistics" }),
        __metadata("design:type", RequestImpactStatistics)
    ], InsightSummary.prototype, "rootCauseServiceRequestImpactStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartTime" }),
        __metadata("design:type", Date)
    ], InsightSummary.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=State" }),
        __metadata("design:type", String)
    ], InsightSummary.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", String)
    ], InsightSummary.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TopAnomalousServices", elemType: AnomalousService }),
        __metadata("design:type", Array)
    ], InsightSummary.prototype, "topAnomalousServices", void 0);
    return InsightSummary;
}(SpeakeasyBase));
export { InsightSummary };
