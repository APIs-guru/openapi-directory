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
// PatchSummary
/**
 * Provides an overview of the patch compliance status for an instance against a selected compliance standard.
**/
var PatchSummary = /** @class */ (function (_super) {
    __extends(PatchSummary, _super);
    function PatchSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=FailedCount" }),
        __metadata("design:type", Number)
    ], PatchSummary.prototype, "failedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Id" }),
        __metadata("design:type", String)
    ], PatchSummary.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledCount" }),
        __metadata("design:type", Number)
    ], PatchSummary.prototype, "installedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledOtherCount" }),
        __metadata("design:type", Number)
    ], PatchSummary.prototype, "installedOtherCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledPendingReboot" }),
        __metadata("design:type", Number)
    ], PatchSummary.prototype, "installedPendingReboot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=InstalledRejectedCount" }),
        __metadata("design:type", Number)
    ], PatchSummary.prototype, "installedRejectedCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=MissingCount" }),
        __metadata("design:type", Number)
    ], PatchSummary.prototype, "missingCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=Operation" }),
        __metadata("design:type", String)
    ], PatchSummary.prototype, "operation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationEndTime" }),
        __metadata("design:type", String)
    ], PatchSummary.prototype, "operationEndTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=OperationStartTime" }),
        __metadata("design:type", String)
    ], PatchSummary.prototype, "operationStartTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=RebootOption" }),
        __metadata("design:type", String)
    ], PatchSummary.prototype, "rebootOption", void 0);
    return PatchSummary;
}(SpeakeasyBase));
export { PatchSummary };
