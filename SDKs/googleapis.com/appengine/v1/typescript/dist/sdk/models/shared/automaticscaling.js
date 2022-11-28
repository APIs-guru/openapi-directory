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
import { CpuUtilization } from "./cpuutilization";
import { DiskUtilization } from "./diskutilization";
import { NetworkUtilization } from "./networkutilization";
import { RequestUtilization } from "./requestutilization";
import { StandardSchedulerSettings } from "./standardschedulersettings";
// AutomaticScaling
/**
 * Automatic scaling is based on request rate, response latencies, and other application metrics.
**/
var AutomaticScaling = /** @class */ (function (_super) {
    __extends(AutomaticScaling, _super);
    function AutomaticScaling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=coolDownPeriod" }),
        __metadata("design:type", String)
    ], AutomaticScaling.prototype, "coolDownPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=cpuUtilization" }),
        __metadata("design:type", CpuUtilization)
    ], AutomaticScaling.prototype, "cpuUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=diskUtilization" }),
        __metadata("design:type", DiskUtilization)
    ], AutomaticScaling.prototype, "diskUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxConcurrentRequests" }),
        __metadata("design:type", Number)
    ], AutomaticScaling.prototype, "maxConcurrentRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxIdleInstances" }),
        __metadata("design:type", Number)
    ], AutomaticScaling.prototype, "maxIdleInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxPendingLatency" }),
        __metadata("design:type", String)
    ], AutomaticScaling.prototype, "maxPendingLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=maxTotalInstances" }),
        __metadata("design:type", Number)
    ], AutomaticScaling.prototype, "maxTotalInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minIdleInstances" }),
        __metadata("design:type", Number)
    ], AutomaticScaling.prototype, "minIdleInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minPendingLatency" }),
        __metadata("design:type", String)
    ], AutomaticScaling.prototype, "minPendingLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=minTotalInstances" }),
        __metadata("design:type", Number)
    ], AutomaticScaling.prototype, "minTotalInstances", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=networkUtilization" }),
        __metadata("design:type", NetworkUtilization)
    ], AutomaticScaling.prototype, "networkUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requestUtilization" }),
        __metadata("design:type", RequestUtilization)
    ], AutomaticScaling.prototype, "requestUtilization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=standardSchedulerSettings" }),
        __metadata("design:type", StandardSchedulerSettings)
    ], AutomaticScaling.prototype, "standardSchedulerSettings", void 0);
    return AutomaticScaling;
}(SpeakeasyBase));
export { AutomaticScaling };
