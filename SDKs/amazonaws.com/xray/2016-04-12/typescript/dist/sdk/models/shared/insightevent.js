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
import { AnomalousService } from "./anomalousservice";
// InsightEvent
/**
 * X-Ray reevaluates insights periodically until they are resolved, and records each intermediate state in an event. You can review incident events in the Impact Timeline on the Inspect page in the X-Ray console.
**/
var InsightEvent = /** @class */ (function (_super) {
    __extends(InsightEvent, _super);
    function InsightEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ClientRequestImpactStatistics" }),
        __metadata("design:type", RequestImpactStatistics)
    ], InsightEvent.prototype, "clientRequestImpactStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EventTime" }),
        __metadata("design:type", Date)
    ], InsightEvent.prototype, "eventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RootCauseServiceRequestImpactStatistics" }),
        __metadata("design:type", RequestImpactStatistics)
    ], InsightEvent.prototype, "rootCauseServiceRequestImpactStatistics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Summary" }),
        __metadata("design:type", String)
    ], InsightEvent.prototype, "summary", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=TopAnomalousServices", elemType: AnomalousService }),
        __metadata("design:type", Array)
    ], InsightEvent.prototype, "topAnomalousServices", void 0);
    return InsightEvent;
}(SpeakeasyBase));
export { InsightEvent };
