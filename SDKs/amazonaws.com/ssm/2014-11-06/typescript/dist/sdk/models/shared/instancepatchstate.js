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
import { PatchOperationTypeEnum } from "./patchoperationtypeenum";
import { RebootOptionEnum } from "./rebootoptionenum";
// InstancePatchState
/**
 * Defines the high-level patch compliance state for a managed instance, providing information about the number of installed, missing, not applicable, and failed patches along with metadata about the operation when this information was gathered for the instance.
**/
var InstancePatchState = /** @class */ (function (_super) {
    __extends(InstancePatchState, _super);
    function InstancePatchState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=BaselineId" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "baselineId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=CriticalNonCompliantCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "criticalNonCompliantCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "failedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstallOverrideList" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "installOverrideList", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "installedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledOtherCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "installedOtherCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledPendingRebootCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "installedPendingRebootCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledRejectedCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "installedRejectedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstanceId" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "instanceId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=LastNoRebootInstallOperationTime" }),
        __metadata("design:type", Date)
    ], InstancePatchState.prototype, "lastNoRebootInstallOperationTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MissingCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "missingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=NotApplicableCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "notApplicableCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Operation" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationEndTime" }),
        __metadata("design:type", Date)
    ], InstancePatchState.prototype, "operationEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationStartTime" }),
        __metadata("design:type", Date)
    ], InstancePatchState.prototype, "operationStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OtherNonCompliantCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "otherNonCompliantCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OwnerInformation" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "ownerInformation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=PatchGroup" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "patchGroup", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RebootOption" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "rebootOption", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SecurityNonCompliantCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "securityNonCompliantCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=SnapshotId" }),
        __metadata("design:type", String)
    ], InstancePatchState.prototype, "snapshotId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=UnreportedNotApplicableCount" }),
        __metadata("design:type", Number)
    ], InstancePatchState.prototype, "unreportedNotApplicableCount", void 0);
    return InstancePatchState;
}(SpeakeasyBase));
export { InstancePatchState };
