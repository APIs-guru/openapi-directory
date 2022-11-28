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
import { ValueWithServiceIds } from "./valuewithserviceids";
import { AvailabilityZoneDetail } from "./availabilityzonedetail";
import { ServiceId } from "./serviceid";
import { ErrorRootCause } from "./errorrootcause";
import { FaultRootCause } from "./faultrootcause";
import { Http } from "./http";
import { InstanceIdDetail } from "./instanceiddetail";
import { ResourceArnDetail } from "./resourcearndetail";
import { ResponseTimeRootCause } from "./responsetimerootcause";
import { TraceUser } from "./traceuser";
// TraceSummary
/**
 * Metadata generated from the segment documents in a trace.
**/
var TraceSummary = /** @class */ (function (_super) {
    __extends(TraceSummary, _super);
    function TraceSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Annotations", elemType: ValueWithServiceIds, elemDepth: 2 }),
        __metadata("design:type", Map)
    ], TraceSummary.prototype, "annotations", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=AvailabilityZones", elemType: AvailabilityZoneDetail }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "availabilityZones", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Duration" }),
        __metadata("design:type", Number)
    ], TraceSummary.prototype, "duration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=EntryPoint" }),
        __metadata("design:type", ServiceId)
    ], TraceSummary.prototype, "entryPoint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ErrorRootCauses", elemType: ErrorRootCause }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "errorRootCauses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FaultRootCauses", elemType: FaultRootCause }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "faultRootCauses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasError" }),
        __metadata("design:type", Boolean)
    ], TraceSummary.prototype, "hasError", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasFault" }),
        __metadata("design:type", Boolean)
    ], TraceSummary.prototype, "hasFault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=HasThrottle" }),
        __metadata("design:type", Boolean)
    ], TraceSummary.prototype, "hasThrottle", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Http" }),
        __metadata("design:type", Http)
    ], TraceSummary.prototype, "http", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], TraceSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceIds", elemType: InstanceIdDetail }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "instanceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=IsPartial" }),
        __metadata("design:type", Boolean)
    ], TraceSummary.prototype, "isPartial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MatchedEventTime" }),
        __metadata("design:type", Date)
    ], TraceSummary.prototype, "matchedEventTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResourceARNs", elemType: ResourceArnDetail }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "resourceArNs", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseTime" }),
        __metadata("design:type", Number)
    ], TraceSummary.prototype, "responseTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ResponseTimeRootCauses", elemType: ResponseTimeRootCause }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "responseTimeRootCauses", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Revision" }),
        __metadata("design:type", Number)
    ], TraceSummary.prototype, "revision", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ServiceIds", elemType: ServiceId }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "serviceIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Users", elemType: TraceUser }),
        __metadata("design:type", Array)
    ], TraceSummary.prototype, "users", void 0);
    return TraceSummary;
}(SpeakeasyBase));
export { TraceSummary };
