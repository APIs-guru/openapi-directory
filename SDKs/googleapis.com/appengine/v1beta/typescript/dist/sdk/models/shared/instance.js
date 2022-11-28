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
export var InstanceAvailabilityEnum;
(function (InstanceAvailabilityEnum) {
    InstanceAvailabilityEnum["Unspecified"] = "UNSPECIFIED";
    InstanceAvailabilityEnum["Resident"] = "RESIDENT";
    InstanceAvailabilityEnum["Dynamic"] = "DYNAMIC";
})(InstanceAvailabilityEnum || (InstanceAvailabilityEnum = {}));
export var InstanceVmLivenessEnum;
(function (InstanceVmLivenessEnum) {
    InstanceVmLivenessEnum["LivenessStateUnspecified"] = "LIVENESS_STATE_UNSPECIFIED";
    InstanceVmLivenessEnum["Unknown"] = "UNKNOWN";
    InstanceVmLivenessEnum["Healthy"] = "HEALTHY";
    InstanceVmLivenessEnum["Unhealthy"] = "UNHEALTHY";
    InstanceVmLivenessEnum["Draining"] = "DRAINING";
    InstanceVmLivenessEnum["Timeout"] = "TIMEOUT";
})(InstanceVmLivenessEnum || (InstanceVmLivenessEnum = {}));
// Instance
/**
 * An Instance resource is the computing unit that App Engine uses to automatically scale an application.
**/
var Instance = /** @class */ (function (_super) {
    __extends(Instance, _super);
    function Instance() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=appEngineRelease" }),
        __metadata("design:type", String)
    ], Instance.prototype, "appEngineRelease", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=availability" }),
        __metadata("design:type", String)
    ], Instance.prototype, "availability", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=averageLatency" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "averageLatency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], Instance.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=memoryUsage" }),
        __metadata("design:type", String)
    ], Instance.prototype, "memoryUsage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], Instance.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=qps" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "qps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=requests" }),
        __metadata("design:type", Number)
    ], Instance.prototype, "requests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=startTime" }),
        __metadata("design:type", String)
    ], Instance.prototype, "startTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmDebugEnabled" }),
        __metadata("design:type", Boolean)
    ], Instance.prototype, "vmDebugEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmId" }),
        __metadata("design:type", String)
    ], Instance.prototype, "vmId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmIp" }),
        __metadata("design:type", String)
    ], Instance.prototype, "vmIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmLiveness" }),
        __metadata("design:type", String)
    ], Instance.prototype, "vmLiveness", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "vmName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmStatus" }),
        __metadata("design:type", String)
    ], Instance.prototype, "vmStatus", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=vmZoneName" }),
        __metadata("design:type", String)
    ], Instance.prototype, "vmZoneName", void 0);
    return Instance;
}(SpeakeasyBase));
export { Instance };
