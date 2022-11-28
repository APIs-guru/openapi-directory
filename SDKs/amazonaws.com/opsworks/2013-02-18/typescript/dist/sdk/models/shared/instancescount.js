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
// InstancesCount
/**
 * Describes how many instances a stack has for each status.
**/
var InstancesCount = /** @class */ (function (_super) {
    __extends(InstancesCount, _super);
    function InstancesCount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Assigning" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "assigning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Booting" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "booting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ConnectionLost" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "connectionLost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Deregistering" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "deregistering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Online" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "online", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Pending" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "pending", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Rebooting" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "rebooting", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Registered" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "registered", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Registering" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "registering", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Requested" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "requested", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RunningSetup" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "runningSetup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SetupFailed" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "setupFailed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ShuttingDown" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "shuttingDown", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StartFailed" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "startFailed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=StopFailed" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "stopFailed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Stopped" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "stopped", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Stopping" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "stopping", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terminated" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "terminated", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Terminating" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "terminating", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Unassigning" }),
        __metadata("design:type", Number)
    ], InstancesCount.prototype, "unassigning", void 0);
    return InstancesCount;
}(SpeakeasyBase));
export { InstancesCount };
